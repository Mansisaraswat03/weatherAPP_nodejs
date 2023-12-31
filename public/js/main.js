const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector('.middle_layer');


const getinfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === "") {
        city_name.innerText = "Plz enter city name before search";
        data_hide.classList.add('data_hide');
    }else{
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aff48327e243c864a75f08bd97e487c6 `;
            const resp = await fetch(url);
            const data = await resp.json();
            const arrData = [data];
            city_name.innerText =`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            

            //cloudy weather check

            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class ='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML =
                "<i class ='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML =
                "<i class ='fas fa-sun' style='color: #eccc68;'></i>";
            }
            data_hide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Plz enter correct city name";
            data_hide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getinfo);

