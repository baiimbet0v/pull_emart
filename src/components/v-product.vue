<template >
    <div class="v-product">
        <p>{{title}}</p>
         <div>
            
        </div>
        <div class="container">
        <div class="block">
            <div class="blocks">
                <div class="blocks_column">
                    <div class="blocks_item">
                        <div class="block_item-img">
                            <img src="img/bakery.png" alt="">
                        </div>
                        <div class="blocks_item-article">
                            <router-link :to="{name: 'beard'}">Хлебобулочные изделия</router-link>

                        </div>
                    </div>                    
                </div>  
                <div class="blocks_column">
                    <div class="blocks_item">
                        <div class="block_item-img">
                            <img src="img/fruits.png" alt="">
                        </div>
                        <div class="blocks_item-article">
                            <a href="">Фрукты, ягоды</a>
                        </div>
                    </div>                    
                </div>  
                <div class="blocks_column">
                    <div class="blocks_item">
                        <div class="block_item-img">
                            <img src="img/harvest.png" alt="">
                        </div>
                        <div class="blocks_item-article">
                            <a href="">Овощи</a>
                        </div>
                    </div>                   
                </div> 
                <div class="blocks_column">
                    <div class="blocks_item">
                        <div class="block_item-img">
                            <img src="img/salami.png" alt="">
                        </div>
                        <div class="blocks_item-article">
                            <a href="">Колбасы, сосиски, деликатесы</a>
                        </div>
                    </div>                    
                </div> 
                                   
            </div>
        </div>
    </div>
    
    </div>
    
</template>

<script>
export default {
    name: 'v-product',
    components: {},
    props: {},
    data(){
        return{
            title: 'Pull Штрихкод'
        }
    }
}
</script>

<style scoped>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.container{
    height: 100%;
    overflow: hidden;
    min-height: 100%;
    padding: 50px;
}

img{
    max-width: 100%;
}

.block{
    font-family: 'Ubuntu', sans-serif;
}

.blocks{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 0px 20px 0px;
}
.blocks_column:hover{
    border: 1px solid #42AB44;
}

.blocks_column{
    background-color: #fff;
    border: 1px solid #D8D8D8;
    border-radius: 15px;
    margin: 20px;
}

.blocks_item{
    padding: 50px;
    font-weight: 700;
}

.block_item-img{
    text-align: center;
}

.blocks_item-article{
    padding-top: 10px;
    line-height: 22px;
    font-size: 20px;
    overflow: hidden;
    font-weight: 500;
    height: 44px;
    text-align: center;
    margin-bottom: 16px;
}

.blocks_item-article a{
    color: #000;
}

</style>