# Create your views here.
import cv2
import numpy as np
from django.shortcuts import render
from django.http import HttpResponse
from django.core.files.storage import FileSystemStorage
from boto3 import resource
from boto3.dynamodb.conditions import Attr, Key
from datetime import datetime


# rememeber to check the othe proj callled final year because of the image issue 
# if not POST use FILES for request
def classify_image(request):
    if request.method == 'POST' and request.FILES['image'] :
        image = request.FILES['image']
        firstname = request.POST['firstname']
        surname = request.POST['surname']
        middlename = request.POST['middlename']
        dateofbirth = request.POST['dateofbirth']
        department = request.POST['department']
        matricno = request.POST['matricno']
        level = request.POST['level']
        gender = request.POST['gender']
        residentialaddress = request.POST['residentialaddress']
        emailaddress = request.POST['emailaddress']
        fs = FileSystemStorage()
        filename = fs.save(image.name, image)
        image_path = fs.url(filename)
        phonenumber = request.POST['phonenumber']


        demo_table = resource('dynamodb').Table('demo-db')
        response = demo_table.put_item(
            Item={
               'customer_ID' :matricno ,#partition key
               'order_id' : phonenumber,#Sort key
               'status' : 'cending',
               'created_date' : datetime.now().isoformat(),
               'matric_no' : matricno,
               'firstname'  : firstname,
               'image_path' : image_path,
               'surname'   : surname,
               'middlename' : middlename,
               'dateofbirth' : dateofbirth,
               'department'  : department,
               'level'       : level,
               'gender'      : gender,
               'residentialaddress' : residentialaddress,
               'emailaddress'    : emailaddress,
               'phonenumber'   : phonenumber,
          }
     )
        print(f"insert response : {response}")

        return render(request, 'classify.html', {'Firstname': firstname})

    return render(request, 'classify.html')

