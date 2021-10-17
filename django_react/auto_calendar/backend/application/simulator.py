from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains 
import time
import pyperclip
# from bs4 import BeautifulSoup
# from datetime import datetime, date
# import datetime


def extract_assignmet_info(x, y):


    options = Options()
    DRIVER_PATH = "/Users/gwoninkenji/opt/driver/chromedriver 2"
    driver = webdriver.Chrome(executable_path=DRIVER_PATH, chrome_options=options)

    
    URL = 'https://lms.sunmoon.ac.kr/'
    driver.get(URL)
    time.sleep(2)

    # translate to Korean 
    button_eng = driver.find_element_by_xpath('//*[@id="LANG"]')
    button_eng.click()
    time.sleep(1)

    button_kr = driver.find_element_by_xpath('//*[@id="LANG"]/option[1]')
    button_kr.click()
    time.sleep(1)

    # login 
    login_btn = driver.find_element_by_xpath('//*[@id="header"]/div[4]/ul/a/li')
    login_btn.click()
    time.sleep(2)

    input_id = driver.find_element_by_xpath('//*[@id="usr_id"]')
    # driver.execute_script("arguments[0].click();", input_id)
    input_id.click()
    time.sleep(1)
    pyperclip.copy(x)
    input_id.send_keys(Keys.COMMAND, 'v')
    time.sleep(1)

    input_pw = driver.find_element_by_id('usr_pwd')
    input_pw.click()
    time.sleep(1)
    pyperclip.copy(y)
    input_pw.send_keys(Keys.COMMAND, 'v')
    time.sleep(1)

    try: 
        button = driver.find_element_by_xpath('//*[@id="myform"]/div/div/div/fieldset/input[3]')
        button.click()
        time.sleep(1)

        # extraction 
        check_btn = driver.find_element_by_xpath('//*[@id="header"]/div[4]/div/fieldset/div/div[2]/img')
        check_btn.click()
        time.sleep(1)

        assignments_btn = driver.find_element_by_xpath('//*[@id="todo_pop"]/div/div[1]/div[2]/div[2]')
        assignments_btn.click()

        time.sleep(2)
        homeworks = driver.find_elements_by_class_name('todo_list')[-1].text
        # print(homeworks)

        homeworks = homeworks.split('\n')
        # print(homeworks)

        list_subject = []
        list_title = []
        list_due = []
        json = {}

        for i in range(len(homeworks)):
            if i % 3 == 0:   # title
                list_title.append(homeworks[i])
            elif i % 3 == 1: # subject 
                list_subject.append(homeworks[i])
            else:            # due
                list_due.append(homeworks[i])

        json['subject'] = list_subject
        json['title'] = list_title
        json['due'] = list_due
        print(json)

        driver.close()
        driver.quit()

        return json

    except:
        return {"Error" : "your ID or Password are invalied..."}
