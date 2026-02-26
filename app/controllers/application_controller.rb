class ApplicationController < ActionController::Base
  include SessionsHelper
  allow_browser versions: :modern

  stale_when_importmap_changes
end
