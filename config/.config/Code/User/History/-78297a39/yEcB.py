'''
read encoded flag.json and decode it to get the flag
'''

import html
filename = "web100_12.3.1_encoded_flag.json"
import pandas as pd
df = pd.read_json(filename)        
flag_dict = df.to_dict()

print(html.unescape(flag_dict['value']))