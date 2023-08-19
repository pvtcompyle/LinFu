'''
read encoded flag.json and decode it to get the flag
'''
import pandas as pd
df = pd.read_json(r'web100_12.3.1_encoded_flag.py')        

print(df)