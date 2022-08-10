<template>
<div>
    <Navbar></Navbar>
    <div class='min-vh-100 bg-silver'>
        <div class='py-5 container'>
            <div class='card p-3 shadow-sm mb-5'>
                <h3 class='font-weight-bold'>Latihan Ngoding </></h3>
                <span>Text Editor sederhana yang bisa membantumu dalam belajar pemrograman website statis.</span>
            </div>
            <client-only>
                <b-tabs content-class="mt-3" class='bg-white shadow-sm rounded'>
                    <b-tab title="HTML" active>
                        <prism-editor class="my-editor shadow-sm min-vh-100" v-model="html" :highlight="highlighter"></prism-editor>
                    </b-tab>
                    <b-tab title="CSS">
                        <prism-editor class="my-editor shadow-sm min-vh-100" v-model="css" :highlight="highlighter"></prism-editor>
                    </b-tab>
                    <b-tab title="JS">
                        <prism-editor class="my-editor shadow-sm min-vh-100" v-model="js" :highlight="highlighter"></prism-editor>
                    </b-tab> 
                    <b-tab title="HASIL" @click='debug' class='fix-pt'>
                        <div id='nav-hasil'>
                            <iframe id='hasil' class='hasil border-0 w-100 min-vh-100' style='margin-bottom: -5px;'></iframe>
                        </div>
                    </b-tab>
                </b-tabs>
            </client-only>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script lang="en">
// import Prism Editor
import {
    PrismEditor
} from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import {
    highlight,
    languages
} from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
    components: {
        PrismEditor,
    },
    data: () => ({
        html: '',
        css: '',
        js: ''
    }),
    head() {
        return {
            title: `Latihan Ngoding - Kodeinaja`,
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: `Latihan ngoding di website KodeInaja.`
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `Latihan ngoding di website KodeInaja.`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `Latihan ngoding di website KodeInaja.`
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: `Latihan ngoding di website KodeInaja.`
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: `Latihan ngoding di website KodeInaja.`
                }
            ]
        }
    },
    methods: {
        debug() {
            document.getElementById('hasil').remove();
            let navHasil = document.getElementById('nav-hasil');
            navHasil.innerHTML = `<iframe id='hasil' class='hasil border-0 w-100 min-vh-100' style='margin-bottom: -5px;'></iframe>`;
            let iframe = document.getElementById('hasil').contentWindow.document;
            let html = this.html;
            let css = "<style>" + this.css + "</style>";
            let js = "<scri" + "pt>" + this.js + "</scri" + "pt>";
            let kode =
`
<!doctype html>
<html lang="en">
	<head>
    	<meta charset="utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<title>Latihan Ngoding</title>
  	</head>
    ${css}
  	<body>
    	${html}
        ${js}
  	</body>
</html>
`;

            iframe.open();
            iframe.write(kode);
            iframe.close();
        },
        highlighter(code) {
            return highlight(code, {
                    ...languages['markup'],
                    ...languages['js'],
                    ...languages['css'],
                },
                'markup'); // languages.<insert language> to return html with markup
        },
    },
    mounted() {
        if (!localStorage.html) {
            this.html = `<!doctype html>
<html lang="en">
    <head>
    	<meta charset="utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<title>Latihan Ngoding</title>
  	</head>
  	<body>
      <h3 class='welcome'>Ayo Mengkoding...</h3>
  	</body>
</html>`;
        }

        if (!localStorage.css) {
            this.css = `.welcome {
    color: red;
}`;
        }

        if (!localStorage.js) {
            this.js = `// kode javascript`;
        }
    }
};
</script>

<style scoped>
.fix-pt {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
}

.my-editor {
    background: #212529;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 10px;
    caret-color: white;
}

.prism-editor__textarea:focus {
    outline: none;
}
</style>
