<template>
  <!--  BEGIN SIDEBAR  -->
  <div class="sidebar-wrapper sidebar-theme">
    <nav ref="menu" id="sidebar">
      <div class="shadow-bottom"></div>

      <perfect-scrollbar
        class="list-unstyled menu-categories"
        tag="ul"
        :options="{
          wheelSpeed: 0.5,
          swipeEasing: !0,
          minScrollbarLength: 40,
          maxScrollbarLength: 300,
          suppressScrollX: true,
        }"
      >
        <li class="menu">
          <router-link to="/" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>{{ $t("Inicio") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/calculadora"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-calculator"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                />
                <path
                  d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"
                />
                <path d="M8 14l0 .01" />
                <path d="M12 14l0 .01" />
                <path d="M16 14l0 .01" />
                <path d="M8 17l0 .01" />
                <path d="M12 17l0 .01" />
                <path d="M16 17l0 .01" />
              </svg>
              <span>{{ $t("Calculadora") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/balance"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-box-multiple-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M14 6a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
                />
                <path
                  d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
                />
                <path
                  d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
                />
              </svg>
              <span>{{ $t("B. General") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/estado"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-box-multiple-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
                />
                <path
                  d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
                />
                <path d="M14 14v-8l-2 2" />
              </svg>
              <span>{{ $t("E. Resultado") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/SeleccionBalance"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-target"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span>{{ $t("Razones Fin.") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/charts/apex-chart"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-pie-chart"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
              <span>{{ $t("Cálculo de AFN") }}</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            to="/dragndrop"
            class="dropdown-toggle"
            @click="toggleMobileMenu"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-move"
              >
                <polyline points="5 9 2 12 5 15" />
                <polyline points="9 5 12 2 15 5" />
                <polyline points="15 19 12 22 9 19" />
                <polyline points="19 9 22 12 19 15" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
              <span>{{ $t("Pto. de Equilibrio") }}</span>
            </div>
          </router-link>
        </li>
      </perfect-scrollbar>
    </nav>
  </div>
  <!--  END SIDEBAR  -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const menu_collapse = ref("dashboard");

onMounted(() => {
  const selector = document.querySelector(
    '#sidebar a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    const ul = selector.closest("ul.collapse");
    if (ul) {
      let ele = ul.closest("li.menu").querySelectorAll(".dropdown-toggle");
      if (ele) {
        ele = ele[0];
        setTimeout(() => {
          ele.click();
        });
      }
    } else {
      selector.click();
    }
  }
});

const toggleMobileMenu = () => {
  if (window.innerWidth < 991) {
    store.commit("toggleSideBar", !store.state.is_show_sidebar);
  }
};
</script>
