<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Estado de Resultado</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span></span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="invoice-container">
                                <div class="invoice-inbox">
                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                <div class="inv--head-section inv--detail-section">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-12 me-auto">
                                                            <div class="d-flex">
                                                                <img class="company-logo" src="@/assets/images/cork-logo.png" alt="company" />
                                                                <h3 class="in-heading align-self-center">Salsas Camille</h3>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-6 text-sm-end">
                                                            <p class="inv-list-number"><span class="inv-title"> </span> <span class="inv-number"> </span></p>
                                                        </div>

                                                        <div class="col-sm-6 align-self-center mt-3">
                                                            <p class="inv-street-addr">Ciudad de Panamá, Condado del Rey, Edificio Country Plaza II. </p>
                                                            <p class="inv-email-address">salsascamille@company.com</p>
                                                            <p class="inv-email-address">(+507) 456 789</p>
                                                        </div>
                                                        <div class="col-sm-6 align-self-center mt-3 text-sm-end">
                                                            <p class="inv-created-date"><span class="inv-title">Desde : </span> <span class="inv-date">31 de Diciembre 2021</span></p>
                                                            <p class="inv-due-date"><span class="inv-title">Hasta : </span> <span class="inv-date">30 de Diciembre de 2022 </span></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="row">
                                                         <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                                            <p class="inv-to">VENTAS</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                                            <h6 class="inv-title"> </h6>
                                                        </div>

                                                        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                                            <p class="inv-street-addr">Costos de ventas</p>
                                                            <p class="inv-to">Utilidad Bruta</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                                            <div class="inv--payment-info">
                                                                <p><span class="inv-subtitle"> </span> <br><br> <span> </span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>000000.00</span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>0000000.00</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="row">
                                                         <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                                            <p class="inv-to">PASIVO</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                                            <h6 class="inv-title"> </h6>
                                                        </div>

                                                        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                                            <p class="inv-to" style="text-decoration: underline">Pasivos Corrientes</p>
                                                            <p class="inv-street-addr">Cuentas por pagar</p>
                                                            <p class="inv-email-address">Prestamos a corto plazo</p>
                                                            <p class="inv-email-address">Prestamos a largo plazo</p>
                                                            <p class="inv-to">Total Pasivos Corrientes</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                                            <div class="inv--payment-info">
                                                                <p><span class="inv-subtitle"> </span> <br><br> <span> </span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>000000.00</span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>000000.00</span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>000000.00</span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>0000000.00</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="row">
                                                         <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                                            <p class="inv-to">PATRIMONIO</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                                            <h6 class="inv-title"> </h6>
                                                        </div>

                                                        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                                            <p class="inv-street-addr">Capital</p>
                                                            <p class="inv-to">Total Patrimonio</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                                            <div class="inv--payment-info">
                                                                <p><span class="inv-subtitle"> </span>  <span> </span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>000000.00</span></p>
                                                                <p><span class="inv-subtitle"> </span> <span>0000000.00</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--note">
                                                    <div class="row mt-4">
                                                        <div class="col-sm-12 col-12 order-sm-0 order-1">
                                                            <p>Gracias por usar CapitalQuick.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-primary btn-send">Enviar</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-secondary btn-print action-print" @click="print()">Imprimir</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-success btn-download">Descargar</a>
                                        </div>
                                        <!-- <div class="col-xl-12 col-md-3 col-sm-6">
                                            <router-link to="/apps/invoice/edit" class="btn btn-dark btn-edit">Edit</router-link>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import '@/assets/sass/apps/invoice-preview.scss';

    useMeta({ title: 'Estado de Resultado' });

    const print = () => {
        window.print();
    };
</script>
