function callParallax(){
  $('.parallax').parallax();
}

window.load = callParallax();

function criaChart(porcentagem, cor,cor2, texto,tempo){
    var newChart={
        type: 'doughnut',
        data: {
            datasets: [{

                data: [
                    porcentagem,
                    100-porcentagem
                ],
                backgroundColor: [cor,cor2,'fff'],
                label: 'Dataset 1'
            }],

        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            cutoutPercentage:80,
            responsive: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: texto
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: tempo
            }
        },
        centerText: {
            display: true,
            text: porcentagem+"%"
        }
    };
    return newChart;
}


function criaDiv(nomeDiv, posicaoGrid){

    var div1 = document.createElement("div");
    div1.id=nomeDiv;
    div1.className= posicaoGrid;


    var divPai = document.getElementById("divCharts");
    divPai.appendChild(div1);
    return div1;
}

function criaCanvas(nomeCanvas, idDiv, linguagem,tempo,cor,cor2,porcentagem){
    var divFilho = document.getElementById(idDiv);

    var canvas = document.createElement("canvas");
    canvas.id=nomeCanvas;
    canvas.height=200;//divFilho.offsetHeight;
    //canvas.width=divFilho.offsetWidth;

    var context = canvas.getContext('2d');

    var novoChart = criaChart(porcentagem,cor,cor2,linguagem, tempo);
    var chart = new Chart(context,novoChart);



    divFilho.appendChild(canvas);



    return divFilho;
}

function geraAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//centraliza texto no chart
Chart.Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.centerText.display !== null &&
            typeof chart.config.centerText.display !== 'undefined' &&
            chart.config.centerText.display) {
            drawTotals(chart);
        }
    },
});
//funcao que peguei do stack para incluir o texto dentro do grafico
function drawTotals(chart) {

    var width = chart.chart.width,
    height = chart.chart.height,
    ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.centerText.text,
    textX = Math.round((width - ctx.measureText(text).width) / 2),
    textY = height / 2;

    ctx.fillText(text, textX, textY+25);
    ctx.fillStyle='#9F9F9F';
    ctx.save();
}
//para os titulos (principais habilidades, habilidades secundarias e habilidades em design grafico)
function montaTitulo(textoTitulo){
    var titulo = document.createElement("H4");

    titulo.textContent=textoTitulo;
    return document.getElementById("divCharts").appendChild(titulo);
}

//Cria o titulo de cada conjunto de gráficos
montaTitulo("Habilidades Principais em Programação");
//Cria as divs e dentro de cada div cria o canvas com o gráfico
var div1= criaDiv("python"," col s4 offset-s1");
var canvas1 = criaCanvas("canvas","python","Python",geraAleatorio(1000,3000),'#0288D1','#BDBDBD',75);
var div2= criaDiv("java"," col s4 offset-s2");
var canvas2 = criaCanvas("canvas","java","Java",geraAleatorio(1000,3000),'#0288D1','#BDBDBD',75);

montaTitulo("Habilidades Secundárias");

var div3= criaDiv("javascript"," col s4");
var canvas3 = criaCanvas("canvas","javascript","JavaScript",geraAleatorio(1000,3000),'#FF6F00','#BDBDBD',70);
var div4= criaDiv("html"," col s4");
var canvas4 = criaCanvas("canvas","html","HTML",geraAleatorio(1000,3000),'#FF6F00','#BDBDBD',70);
var div5= criaDiv("css"," col s4");
var canvas5 = criaCanvas("canvas","css","CSS",geraAleatorio(1000,3000),'#FF6F00','#BDBDBD',70);

montaTitulo("Experiência com Design Gráfico");

var div6= criaDiv("krita"," col s4");
var canvas6 = criaCanvas("canvas","krita","Krita",geraAleatorio(1000,3000),'#43A047','#BDBDBD',70);
var div7= criaDiv("inkscape"," col s4");
var canvas7 = criaCanvas("canvas","inkscape","Inkscape",geraAleatorio(1000,3000),'#43A047','#BDBDBD',70);
var div8= criaDiv("illustrator"," col s4");
var canvas8 = criaCanvas("canvas","illustrator","Illustrator",geraAleatorio(1000,3000),'#43A047','#BDBDBD',50);


//Código para a animação do FOOTER da página



var colors = anime({
  targets: '#colors',

  backgroundColor: [
    {value: '#e3f2fd'},
    {value: '#bbdefb'},
    {value: '#90caf9'},
    {value: '#64b5f6'},
    {value: '#42a5f5'},
    {value: '#2196f3'},
    {value: '#1e88e5'},
    {value: '#1976d2'},
    {value: '#1565c0'},
    {value: '#0d47a1'},
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 15000,
  loop:true
});

$('#ferramenta_materialize').width(200);
$('#ferramenta_materialize').height(200);
var altura_ferramenta_padrao = $('#ferramenta_materialize').height();
$('#ferramenta_jquery').height(altura_ferramenta_padrao);
$('#ferramenta_chartjs').height(altura_ferramenta_padrao);
$('#ferramenta_animejs').height(altura_ferramenta_padrao);
$('#ferramenta_pacce').height(altura_ferramenta_padrao-50);
$('#ferramenta_loading').width(altura_ferramenta_padrao+100);

var ferramenta1 = anime({
  targets: ['#ferramenta_materialize',' #ferramenta_jquery','#ferramenta_chartjs','#ferramenta_animejs','#ferramenta_pacce','#ferramenta_loading'],

    scale: [.98],

    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 1000,
    loop: true
});

particlesJS.load('particles-js','../js/particles.json',function(){
  console.log('particles.json loaded');
});
particlesJS.load('particles-js2','../js/particles.json',function(){
  console.log('particles.json loaded');
});
particlesJS.load('particles-js3','../js/particles.json',function(){
  console.log('particles.json loaded');
});
particlesJS.load('particles-js4','../js/particles.json',function(){
  console.log('particles.json loaded');
});

function changeSize(){
  $('#trello').height(1000);
}

//Como só será necessário 1 chart do tipo radar não criei funções para isso
