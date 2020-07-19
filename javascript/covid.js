var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
            fetch("https://corona-api.com/timeline")
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    active=data.data[0]['active']
                    date=data.data[0]['date']
                    confirm=data.data[0]['confirmed']
                    death=data.data[0]['deaths']
                    recover=data.data[0]['recovered']
                    new_confirm=data.data[0]['new_confirmed']
                    new_recover=data.data[0]['new_recovered']
                    new_death=data.data[0]['new_deaths']
                    document.getElementById("active").innerHTML=active.toLocaleString('en-IN');
                    document.getElementById("confirmed").innerHTML=confirm.toLocaleString('en-IN');
                    document.getElementById("recovered").innerHTML=recover.toLocaleString('en-IN')+" [↑"+new_recover.toLocaleString('en-IN')+"]";
                    document.getElementById("deaths").innerHTML=death.toLocaleString('en-IN')+" [↑"+new_death.toLocaleString('en-IN')+"]";
                    document.getElementById("new_cases").innerHTML=new_confirm.toLocaleString('en-IN');
                })
                fetch("https://corona-api.com/countries/in")
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    indiaconf=data.data.latest_data['confirmed']
                    indiadeaths=data.data.latest_data['deaths']
                    indiarecovered=data.data.latest_data['recovered']   
                    indianewdeaths=data.data.timeline[0].new_deaths 
                    indiacases=data.data.timeline[0].new_confirmed
                    indianewrecovered=data.data.timeline[0].new_recovered
                    indiaactive=data.data.timeline[0].active
                    indiadate=data.data.updated_at
                    document.getElementById("date").innerHTML="("+"last updated on "+indiadate+")";
                    document.getElementById("indiaconfirmed").innerHTML=indiaconf.toLocaleString('en-IN');
                    document.getElementById("indianewcases").innerHTML=indiacases.toLocaleString('en-IN');
                    document.getElementById("indiaactive").innerHTML=indiaactive.toLocaleString('en-IN');
                    document.getElementById("indiarecovered").innerHTML=indiarecovered.toLocaleString('en-IN')+" [↑"+indianewrecovered.toLocaleString('en-IN')+"]";
                    document.getElementById("indiadeaths").innerHTML=indiadeaths.toLocaleString('en-IN')+" [↑"+indianewdeaths.toLocaleString('en-IN')+"]";
                })
                