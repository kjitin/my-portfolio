import json
import boto3
from botocore.client import Config
from io import BytesIO
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:956118533541:deployPortfolioTopic')
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    portfolio_bucket = s3.Bucket('portfolio.jitinkayyala.co.uk')

    portfolio_bucket.download_file('index.html', '/tmp/index.html')
    build_bucket = s3.Bucket('portfoliobuild.jitinkayyala.co.uk')
    portfolio_zip = BytesIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    print('Job Done')
    topic.publish(Subject='Portfolio deployed',Message='Portfolio deployed successfully')
    return 'Hello from Lambda'
