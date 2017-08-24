# WaterEquity website

## Technology

The site is a Python-powered Django website hosted on Amazon Web Services(AWS) Elastic Beanstalk(EB).

### Environments

#### AWS

There are 2 environments hosted on AWS. A development/staging environment named "waterequity-dev", and a production/live site named "waterequity-production".

#### Local

To run the site locally, it is recommended to install the requirements `requirements.txt` (Linux) or `requirementsMac.txt` (Mac) in a [virtual environment](http://virtualenv.readthedocs.io/en/stable/) and create a database (refer to file `example.env` for database name and settings) running Postgres 9.6+.

The settings file utilizes environment variables and are set in the [application](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/application/overview?applicationName=waterequity) Environment Configuration/Software Configuration Environment Properties with each of the environments. For local testing and development, copy the `example.env` file to an `.env` file and the application should run.

### Deployment

In order to upload changes and deploy to AWS EB, you will need to be an assigned user of the Will & Grail AWS account and have [configured](http://docs.aws.amazon.com/cli/latest/userguide/tutorial-ec2-ubuntu.html) your `aws cli` with your AWS access key and secret access key.

The steps to deploy are:

- Make and commit an update. `git commit -m "update description"`
- Deploy. `eb deploy <environment>`
