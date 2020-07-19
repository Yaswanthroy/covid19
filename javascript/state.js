fetch("https://api.covidindiatracker.com/state_data.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data)
                    var table = document.getElementById('myTable')
                    for(var i=0;i<data.length;i++){
                        if(data[i].state!="Unknown*"){
                        var row = `<tr>
							<td>${data[i].state.toLocaleString('en-IN')}</td>
							<td>${data[i].confirmed.toLocaleString('en-IN')}</td>
							<td>${data[i].active.toLocaleString('en-IN')}</td>
                            <td>${data[i].recovered.toLocaleString('en-IN')}</td>
                            <td>${data[i].deaths.toLocaleString('en-IN')}</td>
                            <td><input type="button" value="click here" onclick=func(${i}) /></td>
					  </tr>`
                      table.innerHTML += row
                    }}
                })
                function func(i){
                    fetch("https://api.covidindiatracker.com/state_data.json")
                        .then(function(response){
                            return response.json();
                        })
                        .then(function(data){
                            if(data[i].state!="Total"){
                            document.write("<h1> Districts \xa0\xa0\xa0 - \xa0\xa0\xa0 Total cases </h1>");
                            var state=data[i].districtData
                            for(var j=0;j<state.length;j++){
                                if(state[j].name!="Unknown")
                                document.write("<h2>"+state[j].name+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+state[j].confirmed.toLocaleString('en-IN')+"</h2>");
                            }}
                            else{
                            document.write("<h1> Districts \xa0\xa0\xa0 - \xa0\xa0\xa0 Total cases </h1>");
                            for(i=0;i<data.length;i++){
                                if(data[i].state!="Total"){
                                    var states=data[i].districtData
                                    for(j=0;j<states.length;j++){
                                        document.write("<h2>"+states[j].name+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+states[j].confirmed.toLocaleString('en-IN')+"</h2>");   
                                    }
                                }
                            }}
                        })
                }