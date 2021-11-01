@ECHO OFF
ECHO (-_-) waking up (0-0)
PAUSE
cd express-server
start server.cmd /k
cd ..
ECHO now for the dev build
PAUSE
cd project
call npm install
ECHO running...
call npm run dev