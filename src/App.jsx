import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";

export default function App(){

    const jsonDataOne =[
        {
          "id": 1,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Alice",
          "scores": 'A+',
          "percentage": 91.67
        },
        {
          "id": 2,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Bob",
          "scores": 'A',
          "percentage": 84.33
        },
        {
          "id": 3,
          "image": "https://i.ibb.co/GTt01NN/2.png",
          "name": "Charlie",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 4,
          "image": "https://i.ibb.co/hHpGVWJ/3.png",
          "name": "Chaplin",
          "scores": 'C',
          "percentage": 63.33
        },
        {
          "id": 5,
          "image": "https://i.ibb.co/mqHLfHD/4.png",
          "name": "Jubair",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 6,
          "image": "https://i.ibb.co/L09TdLH/5.jpg",
          "name": "Zahid",
          "scores": 'A',
          "percentage": 83.33
        },
        {
          "id": 7,
          "image": "https://i.ibb.co/qYyKmKQ/6.png",
          "name": "Sahid",
          "scores": 'A+',
          "percentage": 93.33
        },
        {
          "id": 8,
          "image": "https://i.ibb.co/K78bygK/7.jpg",
          "name": "Roni",
          "scores": 'D',
          "percentage": 43.33
        },
        {
          "id": 9,
          "image": "https://i.ibb.co/7NgD9Ly/9.jpg",
          "name": "Afsar",
          "scores": 'F',
          "percentage": 39.33
        },
        {
          "id": 10,
          "image": "https://i.ibb.co/m8yXx18/8.png" ,
          "name": "Masud",
          "scores": 'C',
          "percentage": 59.33
        },
      ]
      const jsonDataTwo =[
        {
          "id": 1,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Kobis",
          "scores": 'A+',
          "percentage": 91.67
        },
        {
          "id": 2,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Abir",
          "scores": 'A',
          "percentage": 84.33
        },
        {
          "id": 3,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Chabir",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 4,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Dobir",
          "scores": 'C',
          "percentage": 63.33
        },
        {
          "id": 5,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Emran",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 6,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": 'Forhad',
          "scores": 'A',
          "percentage": 83.33
        },
        {
          "id": 7,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Jaman",
          "scores": 'A+',
          "percentage": 93.33
        },
        {
          "id": 8,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Kamrul",
          "scores": 'D',
          "percentage": 43.33
        },
        {
          "id": 9,
          "image": "https://i.ibb.co/kJbYFw0/1.png",
          "name": "Asad",
          "scores": 'F',
          "percentage": 39.33
        },
        {
          "id": 10,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Masum",
          "scores": 'C',
          "percentage": 59.33
        },
      ]
      const jsonDataThree =[
        {
          "id": 1,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Blice",
          "scores": 'A+',
          "percentage": 91.67
        },
        {
          "id": 2,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Aob",
          "scores": 'A',
          "percentage": 84.33
        },
        {
          "id": 3,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Dharlie",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 4,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Haplin",
          "scores": 'C',
          "percentage": 63.33
        },
        {
          "id": 5,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Kubair",
          "scores": 'B',
          "percentage": 73.33
        },
        {
          "id": 6,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Ahid",
          "scores": 'A',
          "percentage": 83.33
        },
        {
          "id": 7,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Sahid",
          "scores": 'A+',
          "percentage": 93.33
        },
        {
          "id": 8,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Roni",
          "scores": 'D',
          "percentage": 43.33
        },
        {
          "id": 9,
          "image": "https://i.ibb.co/YpncVGJ/unnamed.png",
          "name": "Afsar",
          "scores": 'F',
          "percentage": 39.33
        },
        {
          "id": 10,
          "image": "https://i.ibb.co/Dp66YLP/10.jpg",
          "name": "Masud",
          "scores": 'C',
          "percentage": 59.33
        },
      ]
    return (
       <>
       <Navbar/>
       <Hero/>
       <StudentTable jsonDataOne={jsonDataOne} jsonDataTwo={jsonDataTwo} jsonDataThree={jsonDataThree}/>
       <Footer/>
       </>
    );
}
