import { Body, Controller, Get,Post } from '@nestjs/common';

@Controller('api')
export class ApiController {


    @Post('/commons/citys')
    getCitys():any{
        return [
            { label: "杭州", value: "10001" },
            { label: "苏州", value: "10002" },
          ];
    }
    
    @Post('/house/hot')
    gethots(){
        return [
            {
                id: 1,
                img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                title: '东城民宿',
                info: '东城区交通方便',
                price: '100'
            },
            {
                id: 2,
                img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                title: '西城民宿',
                info: '西城区山水怡情',
                price: '120'
            },
            {
                id: 3,
                img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
                title: '新区民宿',
                info: '新区民宿位置优越',
                price: '200'
            },
            {
                id: 4,
                img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
                title: '老城民宿',
                info: '老城区风景秀美',
                price: '220'
            }
        ];
    }
    @Post('/house/search')
    getsearch(@Body() body){
        const {pageNum} = body;


        const data=[
            {
                id: 1,
                img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                title: '东城民宿',
                info: '东城区交通方便',
                price: '100'
            },
            {
                id: 2,
                img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                title: '西城民宿',
                info: '西城区山水怡情',
                price: '120'
            },
            {
                id: 3,
                img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
                title: '新区民宿',
                info: '新区民宿位置优越',
                price: '200'
            },
            {
                id: 4,
                img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
                title: '老城民宿',
                info: '老城区风景秀美',
                price: '220'
            },
            {
                id: 5,
                img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                title: '东城民宿',
                info: '东城区交通方便',
                price: '100'
            },
            {
                id: 6,
                img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                title: '西城民宿',
                info: '西城区山水怡情',
                price: '120'
            },
            {
                id: 7,
                img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
                title: '新区民宿',
                info: '新区民宿位置优越',
                price: '200'
            },
            {
                id: 8,
                img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
                title: '老城民宿',
                info: '老城区风景秀美',
                price: '220'
            },
        ];
        if(pageNum<4){
            let list =  data.map(item=>{
                return {...item,id:Math.floor(Math.random()*112000)} 
            })    
            return list;
        }    else{
            return []
        }
    }

    @Post('/house/detail')
    gethousedetail(){
        return {
            data: {
                id: 8,
                banner: [
                  'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                  'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
                  'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
                ],
                info: {
                  title: '老城民宿',
                  msg: '老城区风景秀美',
                  price: '220',
                  publishTime: 1595238771000,
                  startTime: 1595238771000,
                  endTime: 1597917171000,
                }
              }
        };
    }

    @Post("/comments/lists")
    getCommentsList(@Body() body){
        const {pageNum} = body;
        let data = [
            {
              id: 1,
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
              createTime: 1595238771000,
              info: '房屋很满意'
            },
            {
              id: 2,
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '空气清新'
            },
            {
              id: 3,
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 4,
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
            {
              id: 5,
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 6,
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
            {
              id: 7,
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 8,
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
          ]
        if(pageNum<4){
            let list =  data.map(item=>{
                return {...item,id:Math.floor(Math.random()*112000)} 
            })  
            return list;
        }    else{
            return []
        }
    } 


    @Post("/comments/add")
    addComment(){
        return {
            msg:'ok'
        }
    }

    @Post("/order/lists")
    getOrderList(@Body() body){

        const {pageNum} = body;
        let data;
        data = [
            {
              id: 1,
              img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              title: '东城民宿',
              info: '东城区交通方便',
              price: '100',
              createTime: '2020-07-05',
            },
            {
              id: 2,
              img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              title: '西城民宿',
              info: '西城区山水怡情',
              price: '120',
              createTime: '2020-07-05',
            },
            {
              id: 3,
              img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
              title: '新区民宿',
              info: '新区民宿位置优越',
              price: '200',
              createTime: '2020-07-05',
            },
            {
              id: 4,
              img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              title: '老城民宿',
              info: '老城区风景秀美',
              price: '220',
              createTime: '2020-07-05',
            },
            {
              id: 5,
              img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              title: '东城民宿',
              info: '东城区交通方便',
              price: '100',
              createTime: '2020-07-05',
            },
            {
              id: 6,
              img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              title: '西城民宿',
              info: '西城区山水怡情',
              price: '120',
              createTime: '2020-07-05',
            },
            {
              id: 7,
              img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
              title: '新区民宿',
              info: '新区民宿位置优越',
              price: '200',
              createTime: '2020-07-05',
            },
            {
              id: 8,
              img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              title: '老城民宿',
              info: '老城区风景秀美',
              price: '220',
              createTime: '2020-07-05',
            }
          ]

        if(pageNum < 4){
            let list =  data.map(item=>{
                return {...item,id:Math.floor(Math.random()*112000)} 
            })  
              
            return list;
        }    else{
            return []
        }  
    }
    @Post("/user/info")
    getUserInfo(@Body() body){

      return {
        avatar:"http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg",
        tel:"188888888",
        sign:"加油加油~~~~~"
      }

    }
    @Post("/user/saveinfo")
    saveUserInfo(@Body() body){

      return {
         code:"0",
         msg:"成功" 
      }

    }

    @Post("/user/login")
    userlogin(@Body() body){

      return {
         code:"0",
         msg:"成功" ,
         data:{
          id:1,
          username:"root",
          token:123
        } 
      }

    }

    @Post("/user/register")
    userRegister(@Body() body){
      return {
         code:"0",
         msg:"成功",
         data:{
           id:1,
           username:"root",
           token:123
         } 
      }
    }

}
