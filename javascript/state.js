var list=[];
fetch("https://api.covid19india.org/state_district_wise.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    list=data;
                })
fetch("https://api.covid19india.org/v4/min/data.min.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    var table = document.getElementById('myTable')
                    for(let i in data){
                        if(i!="TT"){
                        var name="";
                        var c=0;
                        for(let j in list){
                            c+=1;
                            if (i==list[j]["statecode"]){
                                name=j;break;
                            }}
                        var row = `<tr>
                        <td>${name.toLocaleString('en-IN')}</td>
							<td>${data[i]["total"]["confirmed"].toLocaleString('en-IN')}</td>
							<td>${data[i]["total"]["deceased"].toLocaleString('en-IN')}</td>
							<td>${data[i]["total"]["recovered"].toLocaleString('en-IN')}</td>
                            <td>${data[i]["total"]["tested"].toLocaleString('en-IN')}</td>
                            <td><input type="button" value="click here" onclick=func(${c}) /></td>
					  </tr>`
                      table.innerHTML += row
                    }}
                })
                function func (value) { 
                    state=list[Object.keys(list)[value-1]]["districtData"];
                    for(let i in state){
                        document.write("<h1>"+i+"</h1>");
                        document.write("<h2>"+"ACTIVE"+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+state[i]["active"].toLocaleString('en-IN')+"</h2>");
                        document.write("<h2>"+"CONFIRMED"+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+state[i]["confirmed"].toLocaleString('en-IN')+"</h2>");
                        document.write("<h2>"+"DECEASED"+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+state[i]["deceased"].toLocaleString('en-IN')+"</h2>");
                        document.write("<h2>"+"RECOVERED"+'\xa0\xa0\xa0'+"-"+'\xa0\xa0\xa0'+state[i]["recovered"].toLocaleString('en-IN')+"</h2>"+"</br>");
                        }
                    }