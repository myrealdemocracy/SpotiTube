function rankReducer(rankArr, curr) {
	if (rankArr.indexOf(curr) != -1) {
		return [rankArr.indexOf(curr), curr];
	}
	else {
		return rankReducer(rankArr, (curr - 1));
	}
}

function rank(youtube_results, tracks) {
	for (s_id in youtube_results.items) {
		let num = youtube_results.items[s_id].length - 1;
		data_dict = 
		{
			'youtube_ids': [],
			'youtube_titles': [],
			'youtube_channels': [],
			'youtube_times': []
		};

		ranks = [];

		youtube_results.items[s_id].map(format);

		let s_index = youtube_results.items[s_id][num];
		let s_length = tracks[s_index].trackDuration;
		let s_mins, s_secs = s_length.split(':');
		let s_artists = tracks[s_index].artists;

		for (let i = 0; i < num; i++) {
			let cur_rank = parseInt(ranks[i]);
			let y_channel = data_dict.youtube_channels[i].toLowerCase().replace(' ', '');
			let y_time = data_dict.youtube_times[i];
			let y_title = data_dict.youtube_titles[i].toLowerCase();

			for (let j = 0; j < s_artists.length; j++) {
				let artist = s_artists[j];
				if (!y_channel) {
					cur_rank -= 1;
					console.log(y_channel, artist.toLowerCase().replace(' ',''), cur_rank);
					break;
				}
				else if (y_channel.includes(artist.toLowerCase().replace(' ', ''))) {
					cur_rank = cur_rank == 0 ? cur_rank + 1 : cur_rank;
					console.log(y_channel, artist.toLowerCase().replace(' ',''), cur_rank);
					break;
				}
			}

			let y_mins = y_time.split(':')[0];
			let y_secs = y_time.split(':')[1];
			if (y_mins == s_mins && (Math.abs(parseInt(y_secs) - parseInt(s_secs)) <= 3)) {
				cur_rank += 1;
				console.log(y_mins, s_mins, y_secs, s_secs, cur_rank);
			}

			var regex = 
			[
				/ hq ?/,
				/ ?high quality ?/,
				/ ?\( ?(hq|high quality) ?\) ?/,
				/ ?\[ ?(hq|high quality) ?\] ?/
			];

			for (let j = 0; j < regex.length; j++) {
				let reg = regex[j];
				if (reg.test(y_title)) {
					cur_rank += 1;
					console.log(`${reg}`, y_title, cur_rank);
					break;
				}
			}

			ranks[i] = cur_rank;

		}

		let top_rank = rankReducer(ranks, 3);

		youtube_results.items[s_id] = youtube_results.items[s_id][top_rank[0]];
	}
	console.log(youtube_results);
	console.log(ranks);
	console.log('finished');
	displayYTcards(youtube_results.items);
	return youtube_results.items;
}

function format(arr) {

	if (!Number.isInteger(arr)) {
		let reg = /^PT(\d\d?)(H|M|S)(\d\d?)?(M|S)?(\d\d?)?(S)?$/;
		let time = reg.exec(arr.pop());
		let mins = '';
		switch (time[2]) {
			case 'H':
				mins = time[3];
				break;

			case 'M':
				mins = time[1];
				break;

			case 'S':
				mins = '0';
				break;
		}
		let secs = time.indexOf('S') == -1 ? '00' : time[time.indexOf('S') - 1];
		if (secs.length == 1) { secs = `0${secs}`; }

		let length = `${mins}:${secs}`;

		ranks.push('0');
		data_dict.youtube_ids.push(arr[0]);
		data_dict.youtube_titles.push(arr[1]);
		data_dict.youtube_channels.push(arr[2]);
		data_dict.youtube_times.push(length);
		return arr.push(length);
	}
}

function displayYTcards(videosData) {
	console.log("displaying cards");

	$('.yt-grid').empty();

	var i = 0;
	var gridRow;

	for (var video in videosData) {

		let vidID = videosData[video][0];
		let vidName = videosData[video][1];
		let channel = videosData[video][2];
		let vidDuration = videosData[video][3];
		let thumbnail = "http://placehold.it/140x100";
		let url = `https://www.youtube.com/embed/${vidID}`;

		//set up card containers for YT content
		let cardContainer = $('<div>', {
			'id': vidID,
			'data-name': vidName,
			'class': 'card-container'
		}).append(
		`<div class="col s4">`
			+`<div class="card hoverable">`
				+`<div class="card-image">`
					+`<img src="${thumbnail}" data-url="${url}" class="video responsive-img" alt="youtube thumbnail">`
					+`<span class="card-title">${vidDuration}</span>`
				+`</div>`
				+`<div class="card-content blue-text">`
					+`<p>${vidName}<br><span class="subtext">${channel}</span></p>`
				+`</div>`
			+`</div>`
		+`</div>`);

		//creat a new row after 3 cards
		if (i == 0 || i % 3 == 0) {
			gridRow = $('<div>',{
				'class': 'row-' + i + ' row',
			});

			$('.yt-grid').append(gridRow);
			$(gridRow).append(cardContainer);

		} else {
			$(gridRow).append(cardContainer);
		}

		$('.card-container').on('click', function(e) {
			e.stopImmediatePropagation();

			$('#yt-player').show();

			let self = $(this).attr('id');

			$('#yt-player').attr('src', url);

			console.log(self);
		});

		i++

	}

	$('#modal3').modal('close');
}
