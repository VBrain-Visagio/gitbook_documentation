FROM python:3.8-buster

COPY requirements.txt /tmp/requirements.txt

RUN pip install -r /tmp/requirements.txt
RUN mkdir /app

WORKDIR /app
COPY ./app .

CMD alembic upgrade head && gunicorn -b 0.0.0.0:5000 -w 4 --log-level=warning main_flask:app --timeout 1800 --capture-output --enable-stdio-inheritance
