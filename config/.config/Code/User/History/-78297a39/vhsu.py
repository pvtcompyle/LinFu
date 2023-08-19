'''
read encoded flag.json and decode it to get the flag
'''

import urllib
filename = "web100_12.3.1_encoded_flag.json"
import pandas as pd
df = pd.read_json(filename)        

encoded_flag = 'OS{decode&gt;this&gt;&#x27;flag&#x27;}'
decoded_flag = urllib.parse.unquote(encoded_flag, encoding='utf-8', errors='replace')
print(df)