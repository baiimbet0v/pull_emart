<template>
    <div class="v-product-item">
        <div class="container">
            <div class="product">
                <div class="products">
                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
                            </div>
                        </div>                    
                    </div> 
                    
                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
                            </div>
                        </div>                    
                    </div> 

                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
                            </div>
                        </div>                    
                    </div> 

                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
                            </div>
                        </div>                    
                    </div> 

                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
                            </div>
                        </div>                    
                    </div> 

                    <div class="products_column">
                        <div class="products_item">
                            <div class="product_item-img">
                                <img src="img/bread/bread_1.webp" alt="">
                            </div>
                            <div class="product_item-article">
                                <h2>Хлеб цельнозерновой <br>бездрожжевой рожь</h2>
                            </div>
                            <div class="product_item_barcode-img">
                                <img src="img/barcode/barcode.gif" alt="">
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
    name: 'v-product-item',
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


.product{
    font-family: 'Ubuntu', sans-serif;
}

.products{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.products_column:hover{
    border: 1px solid #42AB44;
    box-shadow: 0 0 20px rgb(163, 158, 158);
}

.products_column{
    background-color: #fff;
    border: 1px solid #C9CACC;
    border-radius: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 20px;
}

.products_item{
    padding: 5px;
    font-weight: 700;
}

.product_item-img{
    min-height: 180px;
    max-height: 180px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.product_item-img img{
    max-width: 100%;
    padding-bottom: 10px;

}

.products_item-article{
    padding-top: 10px;
    line-height: 22px;
    font-size: 20px;
    overflow: hidden;
    font-weight: 500;
    text-align: center;
    margin-bottom: 16px;
}

.product_item_barcode-img{
    padding: 10px;
    text-align: center;
}

.products_item-article a{
    color: #000;
}
</style>