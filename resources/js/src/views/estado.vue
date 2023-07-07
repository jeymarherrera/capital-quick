<template>
    <div class="layout-px-spacing dash_2">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Estado de Resultado</a></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-two">
                    <div class="widget-heading">
                        <div class="media">
                            <div class="media-aside align-self-start">
                                <div class="w-img">
                                    <img src="@/assets/images/g-8.png" alt="avatar" />
                                </div>
                            </div>
                            <div class="media-body">
                                <h6>Salsas Camille - Estado de Resultado</h6>
                                <p class="meta-date-time">del 1 de Enero al 31 de Diciembre de 2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <h5 style="color:red;">Año Anterior</h5>
                        <a href="javascript:;" class="btn btn-secondary">Ver Detalles</a>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-two">
                    <div class="widget-heading">
                        <div class="media">
                            <div class="media-aside align-self-start">
                                <div class="w-img">
                                    <img src="@/assets/images/g-8.png" alt="avatar" />
                                </div>
                            </div>
                            <div class="media-body">
                                <h6>Salsas Camille - Estado de Resultado</h6>
                                <p class="meta-date-time">del 1 de Enero al 31 de Diciembre de 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <h5>Año Actual</h5>
                        <a href="javascript:;" class="btn btn-secondary">Ver Detalles</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
    import '@/assets/sass/widgets/widgets.scss';
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';


    const store = useStore();

</script>
