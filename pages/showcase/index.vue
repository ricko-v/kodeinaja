<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid pt-5 bg-silver min-vh-100">
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8 p-0 mb-5">
            <div class="card shadow-sm p-3">
              <h3 class="">Showcase <b>Project</b> ✨</h3>
              <p>
                Kumpulan project dari kiriman teman-teman semua.
                <br />
                Pamerin juga project yang sudah kamu buat.
                <br />Ingin mengirim juga? kirim projectmu lewat
                <NuxtLink to="/showcase/add">form showcase</NuxtLink>.
              </p>
            </div>
            <div class="mt-5 pt-5">
              <hr class="border border-secondary" />
            </div>
            <div class="card shadow-sm p-3 mt-5">
              <div class="d-block d-md-flex justify-content-between">
                <div>
                  <h3 class="">
                    <span class="font-weight-bold">Showcase Terbaru</span>
                  </h3>
                </div>
                <div class="mt-3 mt-md-0 d-flex">
                  <input
                    v-model="q"
                    class="form-control shadow-none h-100"
                    placeholder="Cari Project..."
                  />
                  <button
                    @click="cari"
                    class="btn btn-primary ml-3 shadow-none"
                  >
                    Cari
                  </button>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div
                v-for="s in project"
                v-if="s.project.toLowerCase().search(q.toLowerCase()) !== -1"
                :key="s.project"
                class="col-md-6 col-lg-6 mb-5"
              >
                <div class="card p-3 shadow-sm h-100">
                  <div class="card-img">
                    <img
                      v-if="!s.external_thumbnail && s.local_thumbnail"
                      :alt="s.project"
                      :src="
                        'https://raw.githubusercontent.com/ricko-v/kodeinaja/master/static/showcase-img/' +
                        s.local_thumbnail
                      "
                      class="img-fluid rounded"
                    />
                    <img
                      v-if="s.external_thumbnail && !s.local_thumbnail"
                      :alt="s.project"
                      :src="s.external_thumbnail"
                      class="img-fluid rounded"
                    />
                  </div>
                  <div class="card-body p-0 mt-3">
                    <h5 class="font-weight-bold">{{ s.project }}</h5>
                    <hr class="border" />
                    <div class="mb-2">
                      <div
                        :class="'badge-' + gachaWarna()"
                        v-for="t in s.tag"
                        class="badge mr-2"
                      >
                        {{ t }}
                      </div>
                    </div>
                    <span class="text-secondary">{{ s.description }}</span>
                  </div>
                  <div class="card-footer mt-5 bg-transparent border-0 p-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <small class="text-secondary">
                          <Tanggal :tanggal="s.createdAt"></Tanggal>
                        </small>
                      </div>
                      <div>
                        <NuxtLink :to="'/user/' + s.username">
                          <small class="text-secondary">{{ s.username }}</small>
                        </NuxtLink>
                      </div>
                    </div>
                    <hr class="border" />
                    <div class="d-flex justify-content-between">
                      <div v-if="s.url">
                        <a :href="s.url" target="_blank">
                          <button class="btn shadow-sm card text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              class="bi bi-globe mb-1"
                            >
                              <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                              ></path>
                            </svg>
                          </button>
                        </a>
                      </div>
                      <div v-if="s.download">
                        <a :href="s.download" target="_blank">
                          <button class="btn shadow-sm card text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              class="bi bi-download mb-1"
                            >
                              <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                              ></path>
                              <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                              ></path>
                            </svg>
                          </button>
                        </a>
                      </div>
                      <div v-if="s.repository">
                        <a
                          :href="
                            'https://github.com/' +
                            s.username +
                            '/' +
                            s.repository
                          "
                          target="_blank"
                        >
                          <button class="btn shadow-sm card text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              class="bi bi-github mb-1"
                            >
                              <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                              ></path>
                            </svg>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <infinite-loading
              spinner="waveDots"
              v-if="project.length > 0"
              class="mt-5 pt-3"
              @infinite="infiniteScroll"
            >
              <div slot="no-more" class="d-flex justify-content-center mt-5">
                <small class="text-secondary">sudah sampai dasar 👏👏</small>
              </div>
              <div slot="no-results"></div>
            </infinite-loading>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const project = await $content("showcase")
      .limit(7)
      .sortBy("createdAt", "desc")
      .fetch();
    const n = 1;
    let q = "";
    return {
      project,
      n,
      q,
    };
  },
  head() {
    return {
      title: `Showcase Project - Kodeinaja`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Pamerin projectmu di website KodeInaja.`,
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: `Pamerin projectmu di website KodeInaja.`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `Pamerin projectmu di website KodeInaja.`,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `Pamerin projectmu di website KodeInaja.`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `Pamerin projectmu di website KodeInaja.`,
        },
      ],
    };
  },
  methods: {
    async cari() {
      let project = await this.$content("showcase")
        .limit(7)
        .sortBy("createdAt", "desc")
        .fetch();
      this.project = project;

      if (this.q == "") {
        this.project = [];
      }
    },
    gachaWarna() {
      let warna = ["dark", "warning", "danger", "success"];
      let gacha = Math.floor(Math.random() * warna.length);

      return warna[gacha];
    },
    async infiniteScroll($state) {
      let dataBaru = await this.$content("showcase")
        .skip(7 * this.n)
        .limit(7)
        .sortBy("createdAt", "desc")
        .fetch();
      this.n++;

      if (dataBaru.length == 0) {
        $state.complete();
      } else {
        this.project = [...this.project, ...dataBaru];
        $state.loaded();
      }
    },
  },
};
</script>
