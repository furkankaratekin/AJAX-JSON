//GET,POST,PUT,DELETE REQ atayacağız ve daha sonrasında promise ile öğreneceğiz.
//AJAX,callback, http request

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  //Get Request
  get(url, callback) {
    this.xhr.open("GET", url); //Bağlantı açık
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        callback(null, this.xhr.responseText); //isteğimiz bitti
      } //üstteki satırda null göndermemizin sebebi hata yok demektir
      else {
        callback("Get Request: bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
  //Post Request
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //Json verisi

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        //Başarılı
        callback(null, this.xhr.responseText);
      } else {
        callback("Post Request: bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  //Put request
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //Json verisi

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        //Başarılı
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Request: bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  
  //Delete Request
  delete(url, callback) {
    this.xhr.open("DELETE", url); //Bağlantı açık
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        callback(null,"Veri Silme İşlemi Başarılı" ); //isteğimiz bitti
      } //üstteki satırda null göndermemizin sebebi hata yok demektir
      else {
        callback("Delete Request: bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}

const request = new Request();

/* request.get("https://jsonplaceholder.typicode.com/comments?postId=1",function(err,response){
    if(err === null){
        //Başarılı
        console.log(response);
    }
    else{
        //Hata
        console.log(err);
    }

}); */

/* request.get(
  "https://jsonplaceholder.typicode.com/comments?postId=3",
  function (err, response) {
    if (err === null) {
      //Başarılı
      console.log(response);
    } else {
      //Hata
      console.log(err);
    }
  }
); */

/* request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thirstler"},function(err,album){
    if(err === null) {
        console.log(album);
    }
    else{
        console.log(err);
    }
});
 */
/* request.put("https://jsonplaceholder.typicode.com/albums/10",{ userId: 143, title: "Tarkan" },function (err, album) {
    if (err === null) {
      console.log(album);
    } else {
      console.log(err);
    }
  }
); */

 request.delete("https://jsonplaceholder.typicode.com/albums/10",function (err, response) {
     if (err === null) {
       //Başarılı
       console.log(response);
     } else {
       //Hata
       console.log(err);
     }
   }
 );


//Üstekki kodda id'si 10 olanı alıp 143 yapıcak ve ismini de tarkan ile değiştirecek






/*xhr = XMLHTTPRequest nesnesi, web sayfalrıyla sunucu arasında 
veri alışverişi yapmak için kullanılan temel bir mekanizmadır.
AJAX isteklerini yapmak, verileri almak ve göndermek için
bu nesneyi kullanırız.Şu an bu ilkel bir yöntemdir 

İleride fetch ve axios gibi kütüphaneler kullanarak da*/


/*Callback'ler ile işlerimizi biraz daha senkron bir hale getirdik */
//bize burdan bir json verisi döndürmemizi sağlar.

