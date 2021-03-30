FROM python:3.8

WORKDIR /api
RUN apt-get update 
RUN apt-get install ffmpeg libsm6 libxext6  -y

COPY . .

EXPOSE 80

RUN pip install --no-cache -r requirements.txt

CMD python ./run.py
