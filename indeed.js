var Indeed = {};

(function($){
  
    Indeed = function(publisher){

        this.publisher = publisher;

        this.defaults = {'v': '2', 'format': 'json', 'publisher': this.publisher};

        this.endpoint = 'http://api.indeed.com/ads/apisearch';

        this.search = function(params, success){
            this.validate_params(params);

            for(var attr in this.defaults){params[attr] = this.defaults[attr];}
            
            $.ajax({
                url: this.endpoint,
                dataType: 'jsonp',
                type: 'GET',
                data: params,
                success: success
            });
        };

        this.required_fields = ['userip', 'useragent', ['q', 'l']];

        this.validate_params = function(params){
            var num_required = this.required_fields.length;

            for(var i = 0; i < num_required; i++){
                var field = this.required_fields[i];
                if(field instanceof Array){
                    var num_one_required = field.length;
                    var has_one = false;
                    for(var x = 0; x < num_one_required; x++){
                        if(field[x] in params){
                            has_one = true;
                            break;
                        }
                    }
                    if(!has_one){
                        throw "You must provide one of the following " + field.join();
                    }
                }else if(!(field in params)){
                    throw "The field "+field+" is required";
                }
            }
        };

    };

})(jQuery);