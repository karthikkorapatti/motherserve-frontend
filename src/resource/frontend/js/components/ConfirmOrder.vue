<template>
	<div>
		<div class="col-md-6">
			<div class="box_style_2">
				<h2 class="inner">Order confirmed!</h2>
				<div id="confirm">
					<i class="icon_check_alt2"></i>
					<h3>Thank you!</h3>
					<p>
						Lorem ipsum dolor sit amet, nostrud nominati vis ex, essent conceptam eam ad. Cu etiam comprehensam nec. Cibo delicata mei an, eum porro legere no.
					</p>
				</div>
				<h4>Summary</h4>
				<table class="table table-striped nomargin">
				<tbody>
				<tr>
					<td>
						<strong>1x</strong> Enchiladas
					</td>
					<td>
						<strong class="pull-right">$11</strong>
					</td>
				</tr>
				<tr>
					<td>
						<strong>2x</strong> Burrito
					</td>
					<td>
						<strong class="pull-right">$14</strong>
					</td>
				</tr>
				<tr>
					<td>
						<strong>1x</strong> Chicken
					</td>
					<td>
						<strong class="pull-right">$20</strong>
					</td>
				</tr>
				<tr>
					<td>
						<strong>2x</strong> Corona Beer
					</td>
					<td>
						<strong class="pull-right">$9</strong>
					</td>
				</tr>
				<tr>
					<td>
						<strong>2x</strong> Cheese Cake
					</td>
					<td>
						<strong class="pull-right">$12</strong>
					</td>
				</tr>
				<tr>
					<td>
						 Delivery schedule <a href="#" class="tooltip-1" data-placement="top" title="" data-original-title="Please consider 30 minutes of margin for the delivery!"><i class="icon_question_alt"></i></a>
					</td>
					<td>
						<strong class="pull-right">Today 07.30 pm</strong>
					</td>
				</tr>
				<tr>
					<td class="total_confirm">
						 TOTAL
					</td>
					<td class="total_confirm">
						<span class="pull-right">$66</span>
					</td>
				</tr>
				</tbody>
				</table>
			</div>
		</div><!-- End col-md-6 -->

		
		<portal to="topBanner">
			<div id="subheader">
				<div id="sub_content">
				 	<h1>Place your order</h1>
			        <div class="bs-wizard">
			            <div class="col-xs-4 bs-wizard-step complete">
			              <div class="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="cart.html" class="bs-wizard-dot"></a>
			            </div>
			                           
			            <div class="col-xs-4 bs-wizard-step complete">
			              <div class="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="#0" class="bs-wizard-dot"></a>
			            </div>
			        
			          <div class="col-xs-4 bs-wizard-step complete">
			              <div class="text-center bs-wizard-stepnum"><strong>3.</strong> Finish!</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="cart_3.html" class="bs-wizard-dot"></a>
			            </div>  
					</div><!-- End bs-wizard --> 
			    </div><!-- End sub_content -->
			</div><!-- End subheader -->
		</portal>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>