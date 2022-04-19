<template>
    <div class="v-beard">
        <div class="v-beard__list">
            <div class="container">
                <div class="block">
                    <div class="blocks">
                        <v-beard-item 
                            v-for="beard in BEARDS"
                            :key="beard.article"
                            v-bind:beard_data="beard"
                        />
                        
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import vBeardItem from './v-beard-item'
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'v-beard',
    components: {
        vBeardItem
    },
    data(){
        return{
            
        }
    },
    computed: {
        ...mapGetters([
            'BEARDS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_BEARDS_FROM_API'
        ])
    },
    mounted(){
        this.GET_BEARDS_FROM_API()
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
    padding: 20px;
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
    font-weight: 500;
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

