require 'httparty'
require 'sinatra'
#require 'json'
require 'Twitter'
module Dal

  class QuotesFromDal < Sinatra::Base
config = {
  consumer_key:    'die',
  consumer_secret: 'motherfucker',
}

client = Twitter::REST::Client.new(config)

client.user('_hack_ta_vist_')

puts client.bearer_token.to_s

config = {
  consumer_key:    'die',
  consumer_secret: 'motherfucker',
  bearer_token: client.bearer_token,
}

client = Twitter::REST::Client.new(config);

quotesArr = [];

client.user_timeline('QuotesFromDal').each do |tweet|
  quotesArr.push(tweet.text);
  
end



get '/' do

  @quote = quotesArr.sample
  erb :'quote'
end

end
end
