import { CustomPool } from '../@types/mysqlCustom';
import MetaTools from './MetaTools';
import User, { user } from './objects/user.db';
import MediaTable, { media } from './objects/media.db';
import Accommodation, { accommodation } from './objects/accommodation.db';
import AccommodationType, { accommodationType } from './objects/accommodationType.db';
import Action, { action } from './objects/action.db';
import Brand, { brand } from './objects/brand.db';
import BookingSource, { bookingSource } from './objects/bookingSource.db';
import Campaign, { campaign } from './objects/campaign.db';
import CampaignAction, { campaignAction } from './objects/campaignAction.db';
import Cms, { cms } from './objects/cms.db';
import ServiceKey, { serviceKey } from './objects/serviceKey.db';
import CompanyVariables, { companyVariables } from './objects/companyVariables.db';
import Destination, { destination } from './objects/destination.db';
import EmailLog, { emailLog } from './objects/emailLog.db';
import EmailTemplate, { emailTemplate } from './objects/emailTemplate.db';
import MarketSegment, { marketSegment } from './objects/marketSegment.db';
import MediaMap, { mediaMap } from './objects/mediaMap.db';
import OrderProduct, { orderProduct } from './objects/orderProduct.db';
import Orders, { orders } from './objects/orders.db';
import PaymentMethod, { paymentMethod } from './objects/paymentMethod.db';
import PointRedemption, { pointRedemption } from './objects/pointRedemption.db';
import Reward, { reward } from './objects/reward.db';
import RewardCategory, { rewardCategory } from './objects/rewardCategory.db';
import ReportTemplate, { reportTemplate } from './objects/reportTemplate.db';
import Reservation, { reservation } from './objects/reservation.db';
import Review, { review } from './objects/review.db';
import Segment, { segment } from './objects/segment.db';
import SystemActionLog, { systemActionLog } from './objects/systemActionLog.db';
import Tier, { tier } from './objects/tier.db';
import UserAction, { userAction } from './objects/userAction.db';
import UserAddress, { userAddress } from './objects/userAddress.db';
import UserCoupon, { userCoupon } from './objects/userCoupon.db';
import UserPermission, { userPermission } from './objects/userPermission.db';
import UserPoint, { userPoint } from './objects/userPoint.db';
import UserSegment, { userSegment } from './objects/userSegment.db';
import UserSocialMedia, { userSocialMedia } from './objects/userSocialMedia.db';
import Company, { company } from './objects/company.db';
import TierFeature, { tierFeature } from './objects/tierFeature.db';
import UpsellPackage, { upsellPackage } from './objects/upsellPackage.db';
import Feature, { feature } from './objects/feature.db';
import AccommodationLayout, { accommodationLayout } from './objects/accommodationLayout.db';
import AccommodationLayoutRoom, { accommodationLayoutRoom } from './objects/accommodationLayoutRoom.db';
import AccommodationCategory, { accommodationCategory } from './objects/accommodationCategory.db';
import VendorView, { vendor } from './objects/vendor.db';
import RewardCategoryMapTable, { rewardCategoryMap } from './objects/rewardCategoryMap.db';
import RewardVoucherTable, { rewardVoucher } from './objects/rewardVoucher.db';
import DestinationPolicy, { destinationPolicy } from './objects/destinationPolicy.db';
import DestinationTax, { destinationTax } from './objects/destinationTax.db';
import UserPaymentMethod, { userPaymentMethod } from './objects/userPaymentMethod.db';
import BrandLocation, { brandLocation } from './objects/brandLocation.db';
import Region, { region } from './objects/region.db';
import UserCompletedCampaign, { userCompletedCampaign } from './objects/userCompletedCampaign.db';
import Amenity, { amenity } from './objects/amenity.db';
import Experience, { experience } from './objects/experience.db';
import DestinationExperience, { destinationExperience } from './objects/destinationExperience.db';
import Rate, { rate } from './objects/rate.db';
import UserPointAllocationRecord from './objects/userPointAllocationRecord.db';
import TierMultiplier, { tierMultiplier } from './objects/tierMultiplier.db';
import UserBusiness, { userBusiness } from './objects/userBusiness.db';

export default class Database {
	user: User;
	media: MediaTable;
	accommodation: Accommodation;
	accommodationCategory: AccommodationCategory;
	accommodationLayout: AccommodationLayout;
	accommodationLayoutRoom: AccommodationLayoutRoom;
	accommodationType: AccommodationType;
	action: Action;
	amenity: Amenity;
	brand: Brand;
	brandLocation: BrandLocation;
	bookingSource: BookingSource;
	campaign: Campaign;
	campaignAction: CampaignAction;
	cms: Cms;
	company: Company;
	serviceKey: ServiceKey;
	companyVariables: CompanyVariables;
	destination: Destination;
	destinationExperience: DestinationExperience;
	destinationPolicy: DestinationPolicy;
	destinationTax: DestinationTax;
	emailLog: EmailLog;
	emailTemplate: EmailTemplate;
	experience: Experience;
	feature: Feature;
	marketSegment: MarketSegment;
	mediaMap: MediaMap;
	orderProduct: OrderProduct;
	orders: Orders;
	paymentMethod: PaymentMethod;
	pointRedemption: PointRedemption;
	rate: Rate;
	region: Region;
	reward: Reward;
	rewardCategory: RewardCategory;
	rewardCategoryMap: RewardCategoryMapTable;
	rewardVoucher: RewardVoucherTable;
	reportTemplate: ReportTemplate;
	reservation: Reservation;
	review: Review;
	segment: Segment;
	systemActionLog: SystemActionLog;
	tier: Tier;
	tierFeature: TierFeature;
	tierMultiplier: TierMultiplier;
	upsellPackage: UpsellPackage;
	userAction: UserAction;
	userAddress: UserAddress;
	userBusiness: UserBusiness;
	userCoupon: UserCoupon;
	userCompletedCampaign: UserCompletedCampaign;
	userPaymentMethod: UserPaymentMethod;
	userPermission: UserPermission;
	userPoint: UserPoint;
	userPointAllocationRecord: UserPointAllocationRecord;
	userSegment: UserSegment;
	userSocialMedia: UserSocialMedia;
	vendor: VendorView;

	constructor(connection: CustomPool, metaTools: MetaTools) {
		const dbArgs = { connection, metaTools, dbObject: this };
		this.user = user(dbArgs);
		this.media = media(dbArgs);
		this.accommodation = accommodation(dbArgs);
		this.accommodationCategory = accommodationCategory(dbArgs);
		this.accommodationLayout = accommodationLayout(dbArgs);
		this.accommodationLayoutRoom = accommodationLayoutRoom(dbArgs);
		this.accommodationType = accommodationType(dbArgs);
		this.action = action(dbArgs);
		this.amenity = amenity(dbArgs);
		this.brand = brand(dbArgs);
		this.brandLocation = brandLocation(dbArgs);
		this.bookingSource = bookingSource(dbArgs);
		this.campaign = campaign(dbArgs);
		this.campaignAction = campaignAction(dbArgs);
		this.cms = cms(dbArgs);
		this.company = company(dbArgs);
		this.serviceKey = serviceKey(dbArgs);
		this.companyVariables = companyVariables(dbArgs);
		this.destination = destination(dbArgs);
		this.destinationExperience = destinationExperience(dbArgs);
		this.destinationPolicy = destinationPolicy(dbArgs);
		this.destinationTax = destinationTax(dbArgs);
		this.emailLog = emailLog(dbArgs);
		this.emailTemplate = emailTemplate(dbArgs);
		this.experience = experience(dbArgs);
		this.feature = feature(dbArgs);
		this.marketSegment = marketSegment(dbArgs);
		this.mediaMap = mediaMap(dbArgs);
		this.orderProduct = orderProduct(dbArgs);
		this.orders = orders(dbArgs);
		this.upsellPackage = upsellPackage(dbArgs);
		this.paymentMethod = paymentMethod(dbArgs);
		this.pointRedemption = pointRedemption(dbArgs);
		this.rate = rate(dbArgs);
		this.region = region(dbArgs);
		this.reward = reward(dbArgs);
		this.rewardCategory = rewardCategory(dbArgs);
		this.rewardCategoryMap = rewardCategoryMap(dbArgs);
		this.rewardVoucher = rewardVoucher(dbArgs);
		this.reportTemplate = reportTemplate(dbArgs);
		this.reservation = reservation(dbArgs);
		this.review = review(dbArgs);
		this.segment = segment(dbArgs);
		this.systemActionLog = systemActionLog(dbArgs);
		this.tier = tier(dbArgs);
		this.tierFeature = tierFeature(dbArgs);
		this.tierMultiplier = tierMultiplier(dbArgs);
		this.userAction = userAction(dbArgs);
		this.userAddress = userAddress(dbArgs);
		this.userBusiness = userBusiness(dbArgs);
		this.userCoupon = userCoupon(dbArgs);
		this.userCompletedCampaign = userCompletedCampaign(dbArgs);
		this.userPaymentMethod = userPaymentMethod(dbArgs);
		this.userPermission = userPermission(dbArgs);
		this.userPoint = userPoint(dbArgs);
		this.userPointAllocationRecord = new UserPointAllocationRecord(dbArgs.connection, 'userPointAllocationRecord');
		this.userSegment = userSegment(dbArgs);
		this.userSocialMedia = userSocialMedia(dbArgs);
		this.vendor = vendor(dbArgs);
	}
}
