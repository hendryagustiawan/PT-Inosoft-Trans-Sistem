<template>
    <div class="container my-5">
        <!-- Bagian A -->
        <div class="d-flex">
            <div class="dropdown me-3">
                <button
                    class="btn btn-outline-light dropdown-toggle"
                    style="color: black"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i
                        class="fa-solid fa-truck me-2"
                        style="color: #00cec9"
                    ></i>
                    Logistic Instruction
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
            <button
                type="button"
                class="btn btn-sm px-5 text-center"
                style="
                    border-radius: 25px;
                    font-size: 15px;
                    background-color: #dfe6e9;
                "
            >
                Draft
            </button>
        </div>
        <!-- Table -->
        <div class="offset-2">
            <table class="table">
                <thead>
                    <tr>
                        <th class="fw-normal" scope="col">Assigned Vendor</th>
                        <th class="fw-normal" scope="col">Attention Of</th>
                        <th class="fw-normal" scope="col">Quotation No</th>
                        <th class="fw-normal" scope="col">Invoice To</th>
                        <th class="fw-normal" scope="col">
                            Customer - Contract
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- END Table -->
        <!-- End -->

        <!-- Bagian B -->
        <div class="dropdown me-3">
            <button
                style="color: #00cec9"
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Cost Detail
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                    <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                </li>
            </ul>
        </div>
        <!-- Table -->
        <table class="table" style="font-size: 14px">
            <thead>
                <tr style="background-color: #f5f6fa">
                    <th scope="col" class="fw-normal">Description</th>
                    <th scope="col" class="fw-normal">Qty</th>
                    <th scope="col" class="fw-normal">UOM</th>
                    <th scope="col" class="fw-normal">Unit Price</th>
                    <th scope="col" class="fw-normal">Discount (%)</th>
                    <th scope="col" class="fw-normal">VAT (%)</th>
                    <th scope="col" class="fw-normal">Currency</th>
                    <th scope="col" class="fw-normal">VAT Amount</th>
                    <th scope="col" class="fw-normal">Sub Total</th>
                    <th scope="col" class="fw-normal">Total</th>
                    <th scope="col" class="fw-normal">Charge To</th>
                    <th scope="col" class="fw-normal"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Description</td>
                    <td>Qty</td>
                    <td>
                        <div class="dropdown">
                            <a
                                class="btn btn-outline-light btn-sm dropdown-toggle"
                                style="color: black"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                SHP
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Another action</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Something else here</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>Unit Price</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                        <div class="dropdown">
                            <a
                                class="btn btn-outline-light btn-sm dropdown-toggle"
                                style="color: black"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                USD
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Another action</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Something else here</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>
                        <div class="dropdown">
                            <a
                                class="btn btn-outline-light btn-sm dropdown-toggle"
                                style="color: black"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Select an option
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Another action</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Something else here</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn px-3"
                            style="background-color: #dfe6e9"
                        >
                            -
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Exchange Rate 1 USD =</td>
                    <td colspan="5">3.672 AED</td>
                    <td class="fw-bold">AED in Total</td>
                    <td class="fw-bold">0.00</td>
                    <td class="fw-bold">0.00</td>
                    <td class="fw-bold" colspan="2">0.00</td>
                    <td>
                        <button
                            type="button"
                            class="btn px-3"
                            style="background-color: #00cec9; color: white"
                        >
                            +
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="d-flex justify-content-end mt-5">
            <button
                type="button"
                class="btn btn-outline-light me-5"
                style="color: black"
            >
                Cancel
            </button>
            <button type="button" class="btn btn-outline-dark me-5 px-5">
                Save as Draft
            </button>
            <button
                type="button"
                class="btn px-5"
                style="background-color: #00cec9; color: white"
            >
                Submit
            </button>
        </div>
        <!-- END Table -->
        <!-- End -->
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
