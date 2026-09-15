import json,re,urllib.request
from datetime import datetime,timezone
from pathlib import Path
URL="https://onlinedonations.us/home/team-view-fundraiser/8099/8099"; OUT=Path("fundraiser-data.json")
req=urllib.request.Request(URL,headers={"User-Agent":"Mozilla/5.0"})
with urllib.request.urlopen(req,timeout=30) as r: html=r.read().decode("utf-8","replace")
m=re.search(r'\$\s*([0-9][0-9,]*(?:\.\d{1,2})?)\s*Raised\s+so\s+far',html,re.I|re.S)
if not m: raise SystemExit("Fundraiser total not found; existing total preserved.")
raised=float(m.group(1).replace(",","")); raised=int(raised) if raised.is_integer() else raised
old=json.loads(OUT.read_text()) if OUT.exists() else {}
OUT.write_text(json.dumps({"goalAmount":old.get("goalAmount",10000),"raisedAmount":raised,"source":URL,"updatedAt":datetime.now(timezone.utc).isoformat()},indent=2)+"\n")
print("Raised:",raised)
