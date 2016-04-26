require 'sinatra'
require 'sinatra/cross_origin'

set :port, 42000

configure do
  enable :cross_origin
end

options "*" do
  response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"

  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"

  200
end


post '/notebooks' do
  logger.info "hello mother fucking world"
  logger.info params


  "hello"
end
