<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { goto } from '$app/navigation'
  import Carousel from 'svelte-carousel'
  import IconButton from '@smui/icon-button'
  import Paper, { Title, Content } from '@smui/paper';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Button, { Label } from '@smui/button';

  let isInView;
  let corousel_idx=0;
  export let component;

  const carousel_photos = [
    'banner/gym.jpg',
    'banner/gym.jpg',
  ]

</script>

<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    {#if component == 'who' }
      <h2 style="margin:0; height:10vh">Sobre Nos:</h2>
      <LayoutGrid>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div class="img"
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: -200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <img class="section" src='/banner/banner1.png'/>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: +200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <Paper color="primary" style="width:90%" elevation=2>
              <h5 style="margin:0px;white-space: pre-line">
                <p>
                  A Fitsuz é uma empresa de publicidade que acredita que a publicidade deve ir além dos painéis nas paredes dos Ginásios.
                  Através de parcerias entregamos os seguintes serviços:
                </p>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Através da Mirror.Report auxiliamos os PT 's de cada ginásio com informação detalhada sobre cada usuário.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Facilitamos o entendimento do progresso de cada usuário reduzindo cancelamentos.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Através da Mirror.Report auxiliamos os PT 's de cada ginásio com informação detalhada sobre cada usuário.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Facilitamos o entendimento do progresso de cada usuário reduzindo cancelamentos.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Renda Extra para os Ginásios.
                  </p>
                </div>
              </h5>
            </Paper>
          </div>
        </Cell>
      </LayoutGrid>
    {:else if component == 'what'}
      <h2 style="margin:0; height:10vh">Mirror.Report</h2>
      <LayoutGrid>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: -200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <Paper color="primary" style="width:90%" elevation=2>
              <h5 style="margin:0px;white-space: pre-line">
                <p>
                  Centralizando os seus dados Fitness em um só:
                </p>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                  Auxilia a visualização de parâmetros Fitness em um único gráfico.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Integração com todos os maiores Fitness trackers do mercado.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Acompanhamento de Clientes à distância.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                  Facilidade de entendimento de progresso para clientes do ginásio.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                  Gera aproximação entre novos usuários e serviços de Personal trainner gerando possibilidade de maior receita para os PT 's e ginásio.
                  </p>
                </div>
              </h5>
            </Paper>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div class="img"
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: +200, duration: 300, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <img class="section" src='/banner/banner1.png'/>
          </div>
        </Cell>
      </LayoutGrid>
    {:else if component == 'marketing'}
      <h2 style="margin:0; height:10vh">Pacote Marketing</h2>
      <LayoutGrid>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div class="img"
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: -200, duration: 300, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <img style="height:40vh;width:100%" src='/banner/banner1.png'/>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: +200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <Paper color="primary" style="width:90%" elevation=2>
              <h5 style="margin:0px;white-space: pre-line">
                <p>
                  Centralizando os seus dados Fitness em um só:
                </p>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                   Virtual 3D Tour (Fotos 3D)
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                  Vídeo Institucional com o melhor de cada Ginásio.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Fotos profissionais de cada Ginásio.
                  </p>
                </div>
              </h5>
            </Paper>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:3, tablet:2, mobile:1}}></Cell>
        <Cell spanDevices={{desktop:6, tablet:10, mobile:11}}>
          <Carousel
            autoplay>
            <div slot="prev"></div>
            <img class="carousel" src="/banner/gym.jpg"/>
            <img class="carousel" src="/banner/gym.jpg"/>
            <img class="carousel" src="/banner/gym.jpg"/>
            <div slot="next"></div>
          </Carousel>
        </Cell>
        <Cell spanDevices={{desktop:3, tablet:2, mobile:1}}></Cell>
      </LayoutGrid>
    {:else if component == 'extra'}
      <LayoutGrid>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: -200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <Paper color="primary" style="width:90%" elevation=2>
              <h2 style="margin:0; height:10vh">O que Pedimos</h2>
              <h5 style="margin:0px;white-space: pre-line">
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Espaços inutilizados nas Paredes dos Ginásios para instalação de 2 (dois) Painéis de Publicidade.
                  </p>
                </div>
                <div class="horizontal">
                  <p style="margin-right:1vw">
                    -
                  </p>
                  <p>
                    Sem custo algum para o Ginásio.
                  </p>
                </div>
              </h5>
              <h3 style="margin-top:1vh; height:5vh">Renda Extra</h3>
              <h5 style="margin:0px;white-space: pre-line">
                <p>
                  Redirecionaremos 25% de toda a receita gerada nos painéis de volta para o Ginásio.

                  Com a Fitsuz Paredes vazias se tornam melhoria de serviço, novos equipamentos e mais receita para o Ginásio.
                </p>
              </h5>
            </Paper>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div class="img"
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: +200, duration: 300, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <img class="section" src='/banner/banner1.png'/>
          </div>
        </Cell>
      </LayoutGrid>
    {:else if component == 'contact'}
      <h2 style="margin:0; height:14vh">Aguardamos o Seu contato</h2>
      <LayoutGrid>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div class="img"
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: -200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <img class="section" src='/banner/banner1.png'/>
          </div>
        </Cell>
        <Cell spanDevices={{desktop:6, tablet:12, mobile:12}}>
          <div
            use:inview={{unobserveOnEnter: true, rootMargin: '-20%' }}
            in:fly={{ x: +200, duration: 400, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}>
            <Paper color="primary" style="width:90%" elevation=2>

              <h5 style="margin:0px;white-space: pre-line">
                <div class="horizontal">
                  <p style="margin-right:1vw">
                  </p>
                  <div>
                    <h4>Janio Oliveira</h4>
                    <h5><IconButton class="material-icons" style="width:2vh;margin-right:2vh" size="button">call</IconButton>924 056 841</h5>
                    <h5><IconButton class="material-icons" style="width:2vh;margin-right:2vh" size="button">cloud</IconButton>info@fitsuz.com</h5>
                  </div>
                </div>
              </h5>
              <div class="horizontal">
                <Button h4 variant="raised" color="secondary" on:click={() => goto('mailto:info@fitsuz.com')}>
                  <Label>Contact us</Label>
                </Button>
              </div>
            </Paper>
          </div>
        </Cell>
      </LayoutGrid>
    {/if}
  {/if}
</div>

<style lang="scss">
  @import '../routes/styles.scss';
  .wrapper {
    margin-top: 30px;
  }
  .box {
    width: 80vh;
    border: 1px solid rgb(221, 221, 221);
    padding: 2vh;
    border-radius: 10px;
  }
  div.horizontal {
    display: flex;
    flex-direction: horizontal;
    margin-top: -1vh
  }
  img.section {
    height:80vh;
    width:100%
  }
  img.carousel {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
  @media (max-width:800px) {
    img.section {
      height:50vh;
      width:100%
    }
  }
</style>
