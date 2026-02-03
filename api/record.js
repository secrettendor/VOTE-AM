import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if(req.method !== "POST") return res.status(405).json({error:"Method not allowed"});

  const {email, password} = req.body;
  if(!email || !password) return res.status(400).json({error:"Email and password required"});

  const filePath = path.join(process.cwd(), "users.json");
  let users = [];
  if(fs.existsSync(filePath)) users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  users.push({email, password, date:new Date().toISOString()});
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(200).json({success:true});
}
