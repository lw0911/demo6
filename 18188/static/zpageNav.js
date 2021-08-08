Vue.component('zpagenav', {
	template: '<div class="page" v-show="total">' +
        '<i class="">共 {{total}} 条</i>' +
		'<a v-bind:key="index" v-for="(item,index) in pageList" v-bind:class ="item.class" @click.stop="setPage(item)" v-html="item.html">' +
		'</a>' +
		'</div>',
	props: {
		prevHtml: String,
		nextHtml: String,
		page: Number,
		total: Number,
		pageSize: Number,
		maxPage: Number
	},
	computed: {
		pageList: function() {
			var _this = this,
				pageList = [];
            var pageCount = Math.ceil(_this.total / _this.pageSize);
            var page = _this.page;
            var prevHtml = _this.prevHtml ? _this.prevHtml : '&lt;';
            var nextHtml = _this.nextHtml ? _this.nextHtml : '&gt;';
            var maxPage = _this.maxPage ? _this.maxPage : 8;

            var hasPrev = page > 1;
            var hasNext = page < pageCount;

			//上一页
			pageList.push({
				class: hasPrev ? '' : 'disabled',
				page: hasPrev ? page - 1 : page,
				html: prevHtml
			});

			//首页
			pageList.push({
				class: page == 1 ? 'show' : '',
				page: 1,
				html: '首页'
			});

			if(pageCount<=maxPage){
				//页码列表
                for(var i = 1; i <= pageCount; i++) {
                    pageList.push({
                        class: page == i ? 'show' : '',
                        page: i,
                        html: i
                    });
                }
			}
            if(pageCount>maxPage){
				if(page < pageCount - 5){
                    //页码列表
                    start = page >= 4 ? page - 2 : 1;
                    end = page >= 4 ? page + 2 : 5;
                    for(var i = start; i <= end; i++) {
                        pageList.push({
                            class: page == i ? 'show' : '',
                            page: i,
                            html: i
                        });
                    }
                    pageList.push({
                        class: 'dot',
                        page: page,
                        html: '...'
                    });
                    for(var i = pageCount-1; i <= pageCount; i++) {
                        pageList.push({
                            class: page == i ? 'show' : '',
                            page: i,
                            html: i
                        });
                    }
				}else{
                    for(var i = 1; i < 2; i++) {
                        pageList.push({
                            class: page == i ? 'show' : '',
                            page: i,
                            html: i
                        });
                    }
                    pageList.push({
                        class: 'dot',
                        page: page,
                        html: '...'
                    });
                    start = page <= pageCount-2 ? page-2 : pageCount-4;
                    end = page <= pageCount-2 ? page + 2 : pageCount;
                    for(var i = start; i <= end; i++) {
                        pageList.push({
                            class: page == i ? 'show' : '',
                            page: i,
                            html: i
                        });
                    }
				}

            }
			//下一页
			pageList.push({
				class: hasNext ? '' : 'disabled',
				page: hasNext ? page + 1 : page,
				html: nextHtml
			});

			return pageList;
		}
	},
	methods: {
		setPage: function(item) {
			
			if(item.class == '') {
				this.$emit('pagehandler', item.page);
			}
		}
	}
});