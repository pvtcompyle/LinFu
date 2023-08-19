'''
read encoded flag.json and decode it to get the flag
'''
filename = "web100_12.3.1_encoded_flag.json"
import pandas as pd
df = pd.read_json(filename)        

print(df)