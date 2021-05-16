

const index = (req, res) => {
            res.render('index', { 
                title: 'Home Page',
                style: 'index.css',
                covidData : {
                    country : "Bangladesh",
                    affected: 776257,
                    recovery: 715321,
                    death:    12005,
                    isAffected: true
                }
            });
}


 const countries =  (req, res) => {
                res.render('countries', { 
                    title: 'About Page',
                    style: 'country.css',
                    countriesAffected: [
                        {CountryName: 'USA', Totalaffected: 32229327},
                        {CountryName: 'Brazil', Totalaffected: 15436827},
                        {CountryName: 'India', Totalaffected: 24046809},
                        {CountryName: 'France', Totalaffected: 5841129},
                        {CountryName: 'India', Totalaffected: 24046809}

                    ]
                });
}


const list = (req, res) => {
                    res.render('list', { 
                        title: 'List Page',
                        style: 'list.css',
                        namelist : ["AstraZeneca", "Pfizer-BioNTech", "Sinopharm-BBIBP","CoviVac", "Sputnik V"]
                
                    });
                }



module.exports = { index, countries, list };