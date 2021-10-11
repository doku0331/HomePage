import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

function home() {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">關於我:</Typography>
          <Typography variant="body">
            這裡是阿瑞的個人網站，綽號由來是陣列的array和本名無關。
            <br />
            目前是資管系大三的學生，專長為網頁開發，對網頁前後端都有涉略，興趣是做一些簡單的小工具和到處旅遊
          </Typography>
          <Typography variant="h5">技能:</Typography>
          <Typography variant="body">
            <ul>
              <li>
                網頁前端開發: React.js(with Material-UI)、RWD網頁開發(with
                bootstrap)
              </li>
              <li> 網頁後端開發: .NET framework MVC、.net framework web API</li>
              <li> 程式語言: C#、JavaScript、python</li>
              <li> 資料庫: MSSQL, firebase</li>
              <li> 其他:基礎unix指令使用、git/github協作</li>
            </ul>
          </Typography>
          <br />
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href="https://github.com/doku0331"
          >
            我的github
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default home;
