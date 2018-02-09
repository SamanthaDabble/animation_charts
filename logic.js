                //Information Grabbing Functions
                
                // decade made
                var eighties = 0, nineties = 0, zeros = 0, tens = 0;
                var x = 0;
                var year;
                var decadeArray = [];
                function decade() {
                    for (x = 0; x < animationData.length; x++){
                        year = animationData[x].year;
                        //decision strcture
                        if(year < 1990)
                            eighties = eighties + 1;
                        else if (year < 2000)
                            nineties = nineties + 1;
                        else if (year < 2010)
                            zeros = zeros + 1;
                        else
                            tens = tens + 1;
                    decadeArray = [eighties, nineties, zeros, tens];
                    }
                }
                
                // studio that created most movies
                var sg = 0, mh = 0, ka = 0, cwf = 0, gkids = 0, pig = 0, sc = 0, b = 0, tms = 0;
                var i;
                var studioArray;
                var studioName;
                 function studioFilms() {
                    for (i = 0; i < animationData.length; i++){
                        studioName = animationData[i].studio_name;
                        if(studioName === "Studio Ghibli")
                            sg = sg + 1;
                        else if (studioName === "Madhouse")
                            mh = mh + 1;
                        else if (studioName === "Kyoto Animation")
                            ka = ka + 1;
                        else if (studioName === "Comix Wave Films")
                            cwf = cwf + 1;
                        else if (studioName === "GKIDS")
                            gkids = gkids + 1;
                        else if (studioName === "Production I.G")
                            pig = pig + 1;
                        else if (studioName === "Studio Chizu")
                            sc = sc + 1;
                        else if (studioName === "Bones")
                            b = b + 1;
                        else
                            tms = tms + 1;
                    studioArray = [sg, mh, ka, cwf, gkids, pig, sc, b, tms];
                    }        
                }
                
                //studios array for labeling
                var studios = ["Studio Ghibli", "Madhouse", "Kyoto Animation", 
                "Comix Wave Films", "GKIDS", "Production I.G", "Studio Chizu", 
                "Bones", "Tokyo Movie Shinsha"];
                
                /*
                arrays here are not functioning correctly 
                commented out instead of deleted so I can work on them in the future
                
                //title
                // NOT WORKING this array is very messy right now
                var titleArray = [];
                var n;
                function title() {
                    for (n = 0; n < animationData.length; n++){
                        title = animationData[n].title;
                        titleArray = titleArray + title + ",";
                    }
                }

                //budget
                var y;
                var budgetArray = [];
                var budget;
                function budgets() {
                    for (y = 0; y < animationData.length; y++){
                        budget = animationData[y].budgetUSD;
                        budgetArray = budgetArray + y + ",";
                    }
                }

                //review scores
                var reviewArray = [];
                var r;
                var review;
                function reviews() {
                    for (r = 0; r < animationData.length; r++){
                        review = animationData[r].reviews;
                        reviewArray = reviewArray + r + ",";
                    }
                }
                */