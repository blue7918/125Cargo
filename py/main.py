
from pydantic import BaseModel
from fastapi import FastAPI
import gspread
import json
import requests
from fastapi.encoders import jsonable_encoder
api_key = "1d123ef6ef073fb326a821fa4badde9f"
app = FastAPI()

class Item(BaseModel):
    name : str
    number: str
    addr :str
    addr_detail :str
    start_brand :str
    start_number :str
    start_oncharge :str
    end_addr :str
    end_addr_detail :str
    end_brand :str
    end_number :str
    end_oncharge :str
    memo :str
    start_time :str
    ship_type :str
    value :str
    pay_method :str

class Map(BaseModel):
    start_addr: str
    end_addr: str


@app.post("/items")
async def create_item(item: Item):
    json_file_path = "key.json"
    gc = gspread.service_account(json_file_path)
    spreadsheet_url = "https://docs.google.com/spreadsheets/d/1cmn4N4WNhc1Y7LPBr7i-Y4BL0y2ZOsP65QD5gXvr0dg/edit?usp=sharing"
    doc = gc.open_by_url(spreadsheet_url)
    worksheet = doc.worksheet("시트1")
    
    list_val = worksheet.get_all_values()
    print('Rows: ', list_val)
    
    cnt = len(list_val)
    print(cnt)
    cnt = str(cnt+1)
    
    print('Cols: ', worksheet.col_count)
    
    
    worksheet.update('a'+cnt, item.name)
    worksheet.update('b'+cnt, item.number)
    worksheet.update('c'+cnt, item.addr)
    worksheet.update('d'+cnt, item.addr_detail)
    worksheet.update('e'+cnt, item.start_brand)
    worksheet.update('f'+cnt, item.start_number)
    worksheet.update('g'+cnt, item.start_oncharge)
    worksheet.update('h'+cnt, item.end_addr)
    worksheet.update('i'+cnt, item.end_addr_detail)
    worksheet.update('j'+cnt, item.end_brand)
    worksheet.update('k'+cnt, item.end_number)
    worksheet.update('l'+cnt, item.end_oncharge)
    worksheet.update('m'+cnt, item.memo)
    worksheet.update('n'+cnt, item.start_time)
    worksheet.update('o'+cnt, item.ship_type)
    worksheet.update('p'+cnt, item.value)
    worksheet.update('q'+cnt, item.pay_method)
    
    return item


def addr_to_lat_lon(addr):
    url = 'https://dapi.kakao.com/v2/local/search/address.json?query={address}'.format(address=addr)
    headers = {"Authorization": "KakaoAK " + api_key}
    result = json.loads(str(requests.get(url, headers=headers).text))
    match_first = result['documents'][0]['address']
    return match_first



@app.post("/km_map")
async def km_map(map : Map):
    start = addr_to_lat_lon(map.start_addr)
    end = addr_to_lat_lon(map.end_addr)
    
    start1 = float(start['x'])
    start2 = float(start['y'])
    end1 = float(end['x'])
    end2 = float(end['y'])
    
    url =f"https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start={start1},{start2}&goal={end1},{end2}&option=trafast"
    headers = {"X-NCP-APIGW-API-KEY-ID":"c3v8x1zp72","X-NCP-APIGW-API-KEY":"mjxQPBYMTEgSF1hjj7QMSyoF4848ifN1adoHvi44"}
    r = requests.get(url, headers=headers)
    
    jsoned = r.json()
    
    addr_data= jsonable_encoder(jsoned)
    
    km = addr_data["route"]["trafast"][0]["summary"]["distance"]
    
    data = km//1000
    
    return data