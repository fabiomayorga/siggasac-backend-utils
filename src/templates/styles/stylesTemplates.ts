export function getStyle() {
    return `
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      @import url('https://fonts.googleapis.com/css?family=Oswald');

      .btn-ekosave {
        border-color: #a3c51a;
        background-color: #a3c51a;
        position: relative;
        display: inline-block;
        font-size: 13px;
        line-height: 24px;
        font-weight: 700;
        padding: 12px 35px;
        color: #fff;
        text-transform: uppercase;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -o-border-radius: 3px;
        border-radius: 3px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }

      .cabecera {
        border-bottom-color: #a3c51a;
        border-bottom-style: solid;
        background: #FCFFFF;
        border-bottom-width: 5px;
      }

      .cabecera img {
        height: 120px;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 5em;
      }

      .footer {
        width: 100%;
        height: 80px;
        font-family: roboto;
        background: #a3c51a;
        background: -moz-linear-gradient(left, #a3c51a 0%, #a3c51a 15%, #a3c51a 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, #a3c51a), color-stop(15%, #a3c51a), color-stop(100%, #a3c51a));
        background: -webkit-linear-gradient(left, #a3c51a 0%, #a3c51a 15%, #a3c51a 100%);
        background: -o-linear-gradient(left, #a3c51a 0%, #a3c51a 15%, #a3c51a 100%);
        background: -ms-linear-gradient(left, #a3c51a 0%, #a3c51a 15%, #a3c51a 100%);
        background: linear-gradient(to right, #a3c51a 0%, #a3c51a 15%, #a3c51a 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c60167', endColorstr='#ff1f93', GradientType=1);
      }

      .cuerpo {
        width: 900px;
        border: 2px solid rgba(128, 128, 128, 0.37);
      }

      .contenido {
        width: 100%;
        height: 350px;
        background-color: #ffffff;
      }

      .info {
        text-align: center;
        width: 70%;
        float: left;
      }

      .info-text {
        text-align: left;
        padding: 1em;
        padding-left: 2em;
        font-size: 17px;
      }

      .info-text a {
        text-decoration: none;
        color: #FCFFFF;
      }

      .titulo-bienvenida {
        font-size: 51px;
        color: #a3c51a;
        font-weight: 200;
        font-family: Oswald;
        text-align: center
      }

      .redes {
        width: 30%;
        float: right;
        height: 100%;
      }

      .redes-icono {
        background: #FCFFFF;
        border-radius: 50%;
        padding: 0.5em;
        margin-top: 1.5em;
      }



      @media only screen and (max-width: 600px) {
        .cuerpo {
          width: 100%;
        }

        .cabecera {
          width: 100%;
        }

        .cabecera img {
          height: 80px;
          text-align: center;
          margin-top: 2em;
        }

        .contenido {
          height: 600px;
        }

        .footer {
          height: 250px;
        }

        .info {
          display: block;
          position: relative;
          overflow: auto;
        }

        .info-text a {
          display: block;
        }

        .titulo-bienvenida {
          font-size: 40px;
        }

        .redes {
          float: left;
          width: 100%;
          text-align: center;
        }
      }
  `;
}

export function getLogoEkosave() {
    return 'http://ekosave.co/img/logoEko60.png';
}

export function getFooter() {
    return `
    <div id="mensaje" class="info">
      <h2 class="info-text">
        <a href="ekosave.co">ekosave.co |</a>
        <a href="info@ekosave.co" style="text-decoration:none; color:#FCFFFF;"> info@ekosave.co |</a>
        <a style="color:#FCFFFF;"> Calle 1 #23-45 | Cali, Colombia</a>
      </h2>
    </div>

    <div id="redes" class="redes">
      <a href="#">
        <img class="redes-icono" src="https://firebasestorage.googleapis.com/v0/b/fptc-test.appspot.com/o/imagenes%2Ftwitter.png?alt=media&token=1e36e06e-5eab-446a-9562-b0a40c88c83d">
      </a>
      <a href="#">
        <img class="redes-icono" src="https://firebasestorage.googleapis.com/v0/b/fptc-test.appspot.com/o/imagenes%2Ffacebook.png?alt=media&token=8f3eae5b-ef00-4bb3-aa12-512b9fe136bc">
      </a>
      <a href="#">
        <img class="redes-icono" src="https://firebasestorage.googleapis.com/v0/b/fptc-test.appspot.com/o/imagenes%2Finstagram.png?alt=media&token=7578ddb0-91d3-4f3a-a361-fea7ca22acb5">
      </a>
      <a href="#">
        <img class="redes-icono" src="https://firebasestorage.googleapis.com/v0/b/fptc-test.appspot.com/o/imagenes%2Fyoutube.png?alt=media&token=e463c481-5c0b-47c6-90dc-a8fa78b54e9b">
      </a>
    </div>
  `;
}
