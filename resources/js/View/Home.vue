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
            <table-a />
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
                <table-b />
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

        <!-- Button -->
        <Button />
        <!-- Button END -->
        <!-- END Table -->
        <!-- End -->
    </div>
</template>

<script>
import TableB from "../components/TableB.vue";
import TableA from "../components/TableA.vue";
import Button from "../components/Button.vue";
export default {
    name: "HomePage",
    components: {
        TableB,
        TableA,
        Button,
    },
};
</script>

<style></style>
