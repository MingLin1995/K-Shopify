# 部署環境建立中...

本地開發要新增資料庫時，要執行 npx prisma migrate dev注意 env 要改為 localhost 上正式環境用 docker時 才會用db

1. 資料庫 ermodel
2. API 規格
3. 註冊、登入、個人資料功能優先
4. 登入、註冊不帶Token，Token檢查寫在Middle ware
5. response包一層輸出層，回應資料統一格式

＝＝＝＝

Swagger API Doc

```
docker-compose build
```

```
docker-compose up
```

http://localhost:3000/api

資料庫 初步設計

https://dbdiagram.io/d/K-Shopify-661941ef03593b6b61daf0a0
