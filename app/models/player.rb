class Player < ApplicationRecord
  belongs_to :user, optional: true
end
