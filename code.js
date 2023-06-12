function knapsack_greedy(cars, weights, values, capacity) {
    var n = weights.length;

    // Menghitung nilai per unit berat untuk setiap barang
    var value_per_weight = [];
    for (var i = 0; i < n; i++) {
        value_per_weight.push({ ratio: values[i] / weights[i], car: cars[i], weight: weights[i], value: values[i] });
    }

    // Mengurutkan barang berdasarkan nilai per unit berat secara menurun
    value_per_weight.sort(function(a, b) {
        return b.ratio - a.ratio;
    });

    var total_value = 0;
    var knapsack = [];

    for (var i = 0; i < n; i++) {
        var car = value_per_weight[i].car;
        var weight = value_per_weight[i].weight;
        var value = value_per_weight[i].value;

        if (weight <= capacity) {
            knapsack.push({ car: car, weight: weight, value: value });
            total_value += value;
            capacity -= weight;
        }
    }

    return { total_value: total_value, knapsack: knapsack };
}

function fractional_knapsack_greedy(cars, weights, values, capacity) {
    var n = weights.length;

    // Menghitung nilai per unit berat untuk setiap barang
    var value_per_weight = [];
    for (var i = 0; i < n; i++) {
        value_per_weight.push({ ratio: values[i] / weights[i], car: cars[i], weight: weights[i], value: values[i] });
    }

    // Mengurutkan barang berdasarkan nilai per unit berat secara menurun
    value_per_weight.sort(function(a, b) {
        return b.ratio - a.ratio;
    });

    var total_value = 0;
    var knapsack = [];

    for (var i = 0; i < n; i++) {
        var car = value_per_weight[i].car;
        var weight = value_per_weight[i].weight;
        var value = value_per_weight[i].value;

        if (weight <= capacity) {
            knapsack.push({ car: car, weight: weight, value: value });
            total_value += value;
            capacity -= weight;
        } else {
            var fraction = capacity / weight;
            knapsack.push({ car: car, weight: capacity, value: fraction * value });
            total_value += fraction * value;
            break;
        }
    }

    return { total_value: total_value, knapsack: knapsack };
}
function msg(capacity) {
    var container1 = document.getElementById("container1");
    // Contoh penggunaan
    var cars1 = ["Ferrari California T", "Chevrolet Camaro 2010", "Chevrolet Colorado", "Roll Royce", "Minicooper 2021", "Lamborghini Gallardo"];
    var weights1 = [200, 205, 190, 330, 33, 228];
    var values1 = [2, 4, 8, 3, 6, 2];
    var capacity1 = capacity;

    // Mulai menghitung waktu eksekusi
    var start_time1 = Date.now();
    var result1 = knapsack_greedy(cars1, weights1, values1, capacity1);
    var max_value1 = result1.total_value;
    var items1 = result1.knapsack;

    container1.innerHTML += (" Nilai maksimum yang dapat dicapai 0/1 knapsack: " + max_value1);
    container1.innerHTML += (" Barang yang dipilih: ");
    for (var i = 0; i < items1.length; i++) {
        var car = items1[i].car;
        var weight = items1[i].weight;
        var value = items1[i].value;
        container1.innerHTML += (" mobil: " + car + " - harga: " + weight + " - kursi: " + value + "\n");
    }

    // Selesai menghitung waktu eksekusi
    var end_time1 = Date.now();
    // Menghitung selisih waktu (waktu eksekusi)
    var execution_time1 = (end_time1 - start_time1) / 1000; // konversi ke detik
    // Menampilkan waktu eksekusi
    container1.innerHTML += (" Waktu eksekusi 0/1 knapsack: " + execution_time1 + " detik");

    var container2 = document.getElementById("container2");
    // Contoh penggunaan
    var cars2 = ["Ferrari California T", "Chevrolet Camaro 2010", "Chevrolet Colorado", "Roll Royce", "Minicooper 2021", "Lamborghini Gallardo"];
    var weights2 = [200, 205, 190, 330, 33, 228];
    var values2 = [2, 4, 8, 3, 6, 2];
    var capacity2 = capacity;

    var start_time2 = Date.now();
    var result2 = fractional_knapsack_greedy(cars2, weights2, values2, capacity2);
    var max_value2 = result2.total_value;
    var items2 = result2.knapsack;

    container2.innerHTML += (" Nilai maksimum yang dapat dicapai fractional knapsack: " + max_value2);
    container2.innerHTML += (" Barang yang dipilih: ");
    for (var i = 0; i < items2.length; i++) {
        var car = items2[i].car;
        var weight = items2[i].weight;
        var value = items2[i].value;
        container2.innerHTML += (" mobil: " + car + " - harga: " + weight + " - kursi: " + value + "\n");
    }

    var end_time2 = Date.now();
    // Menghitung selisih waktu (waktu eksekusi)
    var execution_time2 = (end_time2 - start_time2) / 1000; // konversi ke detik
    // Menampilkan waktu eksekusi
    container2.innerHTML += (" Waktu eksekusi fractional knapsack: " + execution_time2 + " detik ");

}
// function tampil(capacity) {
//     msg(capacity)
// }