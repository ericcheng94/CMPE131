from db import db
from datetime import datetime
#----id----bank_id----user_id----transfer_amount-------date

class TransactionHistoryModel(db.Model):
    # create transaction table
    __tablename__ = 'transaction_history'
    id = db.Column(db.Integer(), primary_key=True)
    transfer_amount = db.Column(db.String(), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    bank_id = db.Column(db.Integer, db.ForeignKey('bank_accounts.id', ondelete="CASCADE"), nullable=False)
    # in kid's class, parent = db.relationship('ParentModel', "kids")
    bank_account = db.relationship('BankAccountModel', back_populates="transactions")
    
    def json(self):
        return {
            'bank_id': self.bank_id,
            'transfer_amount': self.transfer_amount,
            'date': self.date
        }
        
    # parameterized constructor
    def __init__(self, bank_id, transfer_amount, date):
        self.bank_id = bank_id
        self.transfer_amount = transfer_amount
        self.date = date
        
    # retrieve all transaction histories with user_id    
    @classmethod
    def get_by_user_id(cls, user_id):
        return TransactionHistoryModel.query.filter_by(user_id=user_id).all()

    def save_to_db(self):
        #self.id = "hehe"
        db.session.add(self)