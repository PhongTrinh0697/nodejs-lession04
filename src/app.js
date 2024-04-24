import express from "express";
import { create as createHandlebarsEngine } from 'express-handlebars';


//khởi tạo express()
const app = express();
const PORT = 3000;

//Tạo Handlebar Engine
const handlebarsEngine = createHandlebarsEngine({
    defaultLayout: "main",
    layoutsDir : "views/layouts",
    partialsDir : "views/partials",
})

//khai báo engine Handlebars
app.engine('handlebars', handlebarsEngine.engine);
// Sử dụng engine Handlebars
app.set('view engine', 'handlebars');
//Cấu hình folder view
app.set('views', 'views/pages');

// Cấu hình static filés
app.use(express.static("public"));

// Tạo routes
app.get("/",(req, res) =>{
    res.render('homepage');
})

app.get("/about",(req, res)=>{
    res.render("about",{
        name : "Phong",
        title :"Some Text",
        user:{id:1, name:"Phong Trinh"
    },
    values :{
        title : "CONSECTETUR",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.".
    }
    });
});

app.get("/blog", (req,res)=>{
    res.render("blog");
})

app.get("/contact", (req,res)=>{
    res.render("contact");
})

app.get("/services", (req,res)=>{
    res.render("services");
})
// Chạy app Express
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`)
})
