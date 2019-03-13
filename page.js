 $(function() {
            $.get("json/music.json", function(data) {
                let index_music = parseInt(Math.random() * 23);
                let url = data.music_list[index_music].url;
                let singer = data.music_list[index_music].singer;
                let filename = data.music_list[index_music].filename;
                $("audio").attr("src", url);
                $("h2").html("晚安送歌--" + singer + "--" + filename);

                $.get("json/content.json", function(result) {
                    let pic1 = parseInt(Math.random() * 23);
                    let pic2 = parseInt(Math.random() * 23);
                


                    $("#top_li img").attr("src", result.pic_font_list[pic1].img);

                    $("#top_li").append(result.pic_font_list[pic1].font);

                    $("#bottom_li img").attr("src", result.pic_font_list[pic2].img);

                    $("#bottom_li").append(result.pic_font_list[pic2].font);


                })

            })
        })