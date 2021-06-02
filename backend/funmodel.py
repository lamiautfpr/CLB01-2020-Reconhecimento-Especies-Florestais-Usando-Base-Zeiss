import cv2
import numpy as np

def generator(img):
    batch =[]
    # img = cv2.imread(path)
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)

    simg = img[0:int(img.shape[0]/2) , 0:int(img.shape[1]/2),:]   
    simg = cv2.resize(simg,(224,224),cv2.INTER_CUBIC)
    batch.append(simg)

    simg = img[int(img.shape[0]/2) : img.shape[0] , 0:int(img.shape[1]/2),:]   
    simg = cv2.resize(simg,(224,224),cv2.INTER_CUBIC)
    batch.append(simg)

    simg = img[0:int(img.shape[0]/2) , int(img.shape[1]/2) : img.shape[1],:]   
    simg = cv2.resize(simg,(224,224),cv2.INTER_CUBIC)
    batch.append(simg)

    simg = img[int(img.shape[0]/2) : img.shape[0] , int(img.shape[1]/2) : img.shape[1],:]   
    simg = cv2.resize(simg,(224,224),cv2.INTER_CUBIC)
    batch.append(simg)

    batch = np.array(batch, np.float32) / 255.
    yield (np.array(batch, np.float32))


def retorna_dicionario():
    with open('assets/dict.txt','r') as file:
        class_dict = eval(file.read())
    return class_dict

def proc_res(prob):
    res = np.ones(44)

    for l in prob:
        res = np.multiply(l,res)

    res = np.divide(res,sum(res)) 

    class_dict = retorna_dicionario()
    class_dict = sorted(class_dict.items(), key = lambda kv: res[kv[1]], reverse=True)

    dic_retorno = {}

    for cla in class_dict:
        dic_retorno[cla[0]] = round(res[cla[1]] * 100, 6)
    
    return dic_retorno
    