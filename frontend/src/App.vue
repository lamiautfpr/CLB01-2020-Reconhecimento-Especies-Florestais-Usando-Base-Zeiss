<template>
  <div style="height: 1000px; ">
    <div class="navBarTop">
      <div>
        <!--Imagem do LAMIA na parte superior da página-->
        <img v-b-toggle.sidebar-1 id="imgLogo" src="data:image/png;base64,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" alt="">
        <!--v-b-toggle.sidebar-1, referencia ao id do "b-sidebar", ou seja, assim que clicarmos na imagem abre o sidebar-->
        <b-sidebar id="sidebar-1" title="LAMIA" backdrop-variant="dark" backdrop shadow> <!--Barra lateral com os dados abaixo-->
          <div class="px-3 py-2">
            <p>
              O <b>LAMIA</b> foi fundado no início do ano de <span>2019</span> pelo professor Dr. Thiago França Naves com um pequeno 
              grupo de alunos do curso de Ciência da Computação. Em junho do mesmo ano a professora Dra. Arlete 
              Terezinha Beuren e o professor Me. Anderson Brilhador se juntaram formando o time de orientadores do laboratório.
            </p>
          </div>

          <!--Imagem do LAMIA que redireciona para o site-->
          <div class="imaSideBar">
            <a href="https://www.lamia.sh.utfpr.edu.br/"><b-img src="https://www.lamia.sh.utfpr.edu.br/static/media/logo.217404a3.jpg" fluid thumbnail></b-img></a>
          </div>  
          
          <!--Cada avatar referencia para uma das redes sociais do LAMIA -->
          <div class="Centro">
              <a href="https://www.instagram.com/lamiautfpr/"><b-avatar variant="info" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"></b-avatar></a>
              <a href="https://www.facebook.com/lamiautfpr2"><b-avatar variant="info" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII="></b-avatar></a>
              <a href="https://twitter.com/lamiautfpr"><b-avatar variant="info" src="https://image.flaticon.com/icons/png/512/124/124021.png"></b-avatar></a>
              <a href="https://github.com/lamiautfpr"><b-avatar variant="info" src="https://image.flaticon.com/icons/png/512/25/25231.png"></b-avatar></a>
              <a href="https://www.lamia.sh.utfpr.edu.br/"><b-avatar variant="info" src="https://www.lamia.sh.utfpr.edu.br/static/media/logo.217404a3.jpg"></b-avatar></a>
          </div>

        </b-sidebar>
      </div>
    </div>

    <!--Cabeçalho da página-->
    <div id="app">  
      <h2>Protótipo Final de reconhecimento de espécies florestais</h2>
      <router-view/>
    </div>

    <!--Desenvolvedores, cada avatar redireciona ao github de cada um-->
    <div id="footer">
        <div class="avatar">
          <a target="__blank" href="https://github.com/LuisFernandoRosa"><b-avatar variant="info" src="https://avatars2.githubusercontent.com/u/55769006?s=400&u=45cdaa5e1d403095c02642d63a24f9fdf0b8a41f&v=4"></b-avatar>LuisFernandoRosa . GitHub</a> <!--Avatar do Luis-->
          <a target="__blank" href="https://github.com/L3onT3chh"><b-avatar variant="info" src="https://app.lamia.sh.utfpr.edu.br/files/606f295c1daecb65ec6cd5ff24a190d5.jpeg"></b-avatar>L3onT3chh . GitHub</a> <!--Avatar do Gustavo-->
          <a target="__blank" href="https://github.com/ANACAPELETTI"><b-avatar variant="info" src="https://app.lamia.sh.utfpr.edu.br/files/f61bf260cd4e849ac612785435f0bed0.jfif"></b-avatar>ANACAPELETTI . GitHub</a> <!--Avatar da Ana-->
        </div>
    </div>
  </div>
</template>


<script>
  import './style.css';

  export default {
    name: 'App'
  }
</script>